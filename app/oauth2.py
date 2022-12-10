from jose import JWTError, jwt
from datetime import datetime, timedelta
from . import schemas
from .database import get_db, db
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from .config import settings


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login") # tokenurl is the end point before the token

# What we need for token authenticstion:
# Secret key: In the API servers (not visible to client)
# Hashing Algorithim (HS256)
# Expiration time for token 

SECRET_KEY = settings.secret_key
ALGORITHIM = settings.algorithim
ACCESS_TOKEN_EXPIRE_MINUTES = settings.access_token_expire_minutes

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHIM)
    return encoded_jwt

def verify_access_token(token: str, credentials_exception):

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHIM])
        id : str = payload.get("user_id")
        if id is None:
            raise credentials_exception
        token_data = schemas.TokenData(id=id)

    except JWTError:
        raise credentials_exception

    return token_data

def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials", 
    headers={"WWW-Authenticate": "Bearer"})

    conn, cursor = get_db()
    token = verify_access_token(token, credentials_exception)
    query = '''
            SELECT * FROM users
            WHERE user_id = %s
            '''
    cursor.execute(query, (token.id,))
    user = cursor.fetchone()
    conn.close()
    
    return user
    # return verify_access_token(token, credentials_exception)




