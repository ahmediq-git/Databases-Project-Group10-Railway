from .. import schemas, utils, oauth2
from ..database import get_db, db
from fastapi import HTTPException, status, APIRouter, Depends
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
import re


router = APIRouter(
    prefix="/user",
    tags=["Users"]
)


# @router.exception_handler(RequestValidationError)
# def validation_exception_handler(request: Request, exc: RequestValidationError):
#     return JSONResponse(
#         status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
#         content=jsonable_encoder({"detail": exc.errors(), "body": exc.body}),
#     )

@router.post("/", status_code=status.HTTP_201_CREATED) # response_model=schemas.UserOut
def create_user(user: schemas.UserCreate, dbase = Depends(db)):
    
    # Hash the password - user.password
    user.password = utils.hash(user.password)
    sql_query = """INSERT INTO users(fname, lname, email, password, phone_num, date_of_birth, cnic) VALUES (%s, %s, %s, %s, %s, %s, %s);"""

    # domain = re.search("@[\w.]+", user.email)
    domain = user.email[user.email.find("@") : ]
    # domain = user.email[domain_index:]

    if domain == "@staff.com" or domain == "@admin.com":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Please enter a valid domain name")

    dbase.cursor.execute(sql_query, (user.fname, user.lname, user.email, user.password, user.phone_num, user.dob, user.cnic))
    dbase.conn.commit()
    dbase.conn.close()

    # return new_user
    return user


@router.put("/update/", response_model=None)
def update_password(update_info: schemas.UserUpdate, current_user: int = Depends(oauth2.get_current_user)):
    
    # Setup database and retreive information
    conn, cursor = get_db()
    current_user_email = current_user['email']
    query = '''
            SELECT user_id, password FROM users
            WHERE email = %s
            '''
    cursor.execute(query, (current_user_email, ))
    user = cursor.fetchone()

    # Hash the old password entered and verify against old password
    
    old_password_hashed = utils.hash(update_info.old_password)
    database_password = current_user['password']

    if not utils.verify(update_info.old_password, database_password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials")


    # Hash the new password and update table
    new_password_hashed = utils.hash(update_info.new_password)
    update_query = '''
                    UPDATE users
                    SET password = %s
                    WHERE email = %s
                    '''
    cursor.execute(update_query, (new_password_hashed, current_user_email))
    conn.commit()
    conn.close()

    return user    