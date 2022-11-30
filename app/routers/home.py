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
    query = '''
            select departure_city, arrival_city, departure_date, train_name, train_type 
            from schedule
            INNER JOIN routes ON schedule.route_id = routes.route_id
            INNER JOIN train ON schedule.train_id = train.train_id
            WHERE departure_date > %s
            AND departure_date < %s
            '''

    try:
        results = cursor.execute(query, (today, next_ten_days)).fetchall()
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Nothing Found")

    return results
