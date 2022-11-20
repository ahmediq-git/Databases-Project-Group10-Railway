from .. import schemas, oauth2
from ..database import get_db
from fastapi import  Response, HTTPException, status, Depends, APIRouter
from typing import List, Optional
from sqlalchemy import func


router = APIRouter(
    prefix="/cargo",
    tags=["Cargo"] # Groups all post methods in the documentation
)


# * Get cargo by id
@router.get("/{id}", response_model=schemas.CargoOut)
def get_(id: int, current_user: int = Depends(oauth2.get_current_user)):
   
    conn, cursor = get_db()
    sql_query = '''
                SELECT * 
                FROM cargo
                WHERE cargo_id = %s
                '''
    cursor.execute(sql_query, (id,)) 
    booking = cursor.fetchone()
    user_id = booking["user_id"]
    current_user_id = current_user["user_id"]

    if not booking:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Not Booking found with Reference #: - {id}")

    if user_id != current_user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Your are not allowd to view the ticket. Please sign in to continue")

    return booking # The respone of the schema will be on the response model


