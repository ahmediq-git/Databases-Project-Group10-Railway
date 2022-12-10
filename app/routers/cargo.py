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
def get_cargo(id: int, current_user: int = Depends(oauth2.get_current_user)):
   
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


# * Get cargo by id
@router.post("/book", response_model=schemas.CargoOut)
def book_cargo(cargo: schemas.CargoCreate, current_user: int = Depends(oauth2.get_current_user)):
   
    conn, cursor = get_db()

    # schedule_query = '''
    #                 SELECT schedule_id, schedule.train_id, schedule.route_id
    #                 FROM schedule
    #                 JOIN routes ON schedule.route_id = routes.route_id
    #                 JOIN trains ON schedule.train_id = trains.train_id
    #                 WHERE "departure_date" = '09/03/2022' 
    #                 AND "departure_city" = 'Nawabshah'
    #                 AND "arrival_city" = 'Dasu'
    #                 '''

    #                 # '09/03/2022'
    #                 # 'Nawabshah'
    #                 # 'Dasu'
    # try:
    #     result = cursor.execute(schedule_query, (cargo.departure_date, cargo.departure_city, cargo.arrival_city)).fetchone()
    #     print(result)
    # except:
    #     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Journeys Found")


    # schedule_id = result["schedule_id"]
    # train_id = result["train_id"]
    # route_id = result["route_id"]
    current_user_id = current_user["user_id"]


    sql_query = '''
                INSERT INTO cargo 
                (train_id, user_id, schedule_id, weight, route_id)
                VALUES (%s, %s, %s, %s, %s)
                '''
    cursor.execute(sql_query, (cargo.train_id, current_user_id, cargo.schedule_id, cargo.weight, cargo.route_id)) 

    conn.close()

    



