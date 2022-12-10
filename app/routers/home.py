from .. import schemas, oauth2
from ..database import db, get_db
from fastapi import  Response, HTTPException, status, Depends, APIRouter
from typing import List, Optional
from sqlalchemy import func
from datetime import datetime, timedelta, date

router = APIRouter(
    prefix="/home",
    tags=["Homepage"] # Groups all post methods in the documentation
)

@router.get("/", response_model=List[schemas.AllSchedule])
def view_schedule():

    conn, cursor = get_db()

    today = date.today()
    next_ten_days = today + timedelta(days=10)

    # print(today, next_ten_days)
    # query = '''
    #         SELECT departure_city, arrival_city, departure_date, train_name, type_of_train 
    #         FROM schedule
            #   INNER JOIN routes ON schedule.route_id = routes.route_id
            #   INNER JOIN trains ON schedule.train_id = trains.train_id
    #         WHERE departure_date > %s
    #         AND departure_date < %s
    #         '''

    query = '''
            SELECT departure_city, arrival_city, departure_date, train_name, type_of_train
            FROM schedule
            JOIN routes ON schedule.route_id = routes.route_id
            JOIN trains ON schedule.train_id = trains.train_id
            WHERE departure_date = '09/03/2022'
            '''
    # today = today.strftime("%m/%d/20%y")
    print(today)
    # today = "09/03/2022"
    cursor.execute(query)
    results = cursor.fetchall()

    if not results:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Nothing Found")

    conn.close()

    return results
