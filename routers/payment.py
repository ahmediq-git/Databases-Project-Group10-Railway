from .. import schemas, oauth2, utils
from ..database import get_db
from fastapi import  Response, HTTPException, status, Depends, APIRouter
from fastapi import APIRouter, Depends, status, HTTPException, Response
from .. import  schemas, utils, oauth2
from ..database import db
from fastapi.security.oauth2 import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from fastapi.responses import RedirectResponse, HTMLResponse
import random


router = APIRouter(
    prefix="/payment",
    tags=["Payment"] # Groups all post methods in the documentation
)

@router.post("/card/{id}",  response_model=schemas.PaymentOTP)
def pay_card(id: int, current_user: int = Depends(oauth2.get_current_user)):

    conn, cursor = get_db()

    query = '''
            UPDATE bookings
            SET payment_type = 'Card'
            WHERE booking_id = %s
            '''

    cursor.execute(query, (id,))

    return random.randint(1000,9999)



@router.post("/card/{id}")
def pay_cash(id: int, current_user: int = Depends(oauth2.get_current_user)):

    conn, cursor = get_db()

    query = '''
            UPDATE bookings
            SET payment_type = 'Cash'
            WHERE booking_id = %s
            '''

    cursor.execute(query, (id,))


