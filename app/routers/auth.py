from fastapi import APIRouter, Depends, status, HTTPException, Response
from .. import  schemas, utils, oauth2
from ..database import db
from fastapi.security.oauth2 import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from fastapi.responses import RedirectResponse
# from fastapi_login import LoginManager 




router = APIRouter(
    tags=["Authentication"]
)


@router.post("/login", response_model=schemas.Token)
def login(dbase = Depends(db), user_credentials: OAuth2PasswordRequestForm = Depends()):

    # OAuth2PasswordRequestForm returns only username and password (does not return it as "email")
    # user = db.query(models.User).filter(models.User.email == user_credentials.username).first()
    query = '''
            SELECT user_id, password FROM users
            WHERE email = %s
            '''
    dbase.cursor.execute(query, (user_credentials.username, ))
    user = dbase.cursor.fetchone()
    password = user['password']
    id = user['user_id']
    dbase.conn.commit()
    dbase.conn.close()

    if not user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials")

    if not utils.verify(user_credentials.password, password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials")

    access_token = oauth2.create_access_token({"user_id": id}) # We can decide which data to include in the payload

    # Create a token and return token
    return {"access_token": access_token, "token_type": "bearer"}



@router.get("/logout")
def logout(response : Response, current_user = Depends(oauth2.get_current_user)):
    response.delete_cookie("access_token")
    response.delete_cookie("bearer")

