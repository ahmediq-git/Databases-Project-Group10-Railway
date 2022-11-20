from .. import schemas, utils
from ..database import get_db, db
from fastapi import HTTPException, status, APIRouter, Depends
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

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

    dbase.cursor.execute(sql_query, (user.fname, user.lname, user.email, user.password, user.phone_num, user.dob, user.cnic))
    dbase.conn.commit()
    dbase.conn.close()

    # return new_user
    return user

# @router.get("/{id}", response_model=schemas.CustomerOut)
# def get_user(id: int, db):
#     # user = db.query(models.User).filter(models.User.id == id).first()
#     sql_query = ""
#     db.connect()
#     user = db.commit(sql_query)

#     if not user:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with {id} does not exist")

#     return user    