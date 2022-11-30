from .. import schemas, oauth2
from ..database import db, get_db
from fastapi import  Response, HTTPException, status, Depends, APIRouter
from typing import List, Optional
from sqlalchemy import func


router = APIRouter(
    prefix="/bookings",
    tags=["Bookings"] # Groups all post methods in the documentation
)


# * #################################  GET Methods #################################



# * Get Ticket by ID
@router.get("/{id}", response_model=schemas.BookingOut) # 
def get_booking(id: int, current_user: int = Depends(oauth2.get_current_user)):
   
    # posts = db.query(models.Post).filter(models.Post.title.contains(search)).limit(limit).offset(skip).all()
    conn, cursor = get_db()
    sql_query = '''
                SELECT users.user_id, seat_id, fname, lname, phone_num, arrival_time,  departure_time, departure_city, arrival_city
                FROM bookings
                JOIN users ON bookings.user_id = users.user_id
                JOIN schedule ON bookings.schedule_id = schedule.schedule_id
                JOIN routes ON schedule.route_id = routes.route_id
                WHERE bookings.booking_id = %s
                '''
    cursor.execute(sql_query, (id,))
    booking = cursor.fetchone()
    current_user_id = current_user['user_id']
    user_id = booking['user_id']

    if not booking:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Booking with id #:- {id} not found")

    if user_id != current_user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Your are not allowd to view the ticket. Please sign in to continue")

    conn.close()

    return booking # The respone of the schema will be on the response model


# * Get Ticket Status
@router.get("/status/{id}", response_model=schemas.BookingStatus)
def get_booking(id: int, current_user: int = Depends(oauth2.get_current_user)):
   
    # posts = db.query(models.Post).filter(models.Post.title.contains(search)).limit(limit).offset(skip).all()
    sql_query = '''
                SELECT user_id, booking_id, seat_id
                FROM bookings
                WHERE bookings.booking_id = %s
                '''
    conn, cursor = get_db()

    cursor.execute(sql_query, (id,))
    booking = cursor.fetchone()

    print(booking)

    if not booking:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Not Booking found with Reference #: - {id}")

    user_id = booking['user_id']
    current_user_id = current_user['user_id']
    print(user_id, current_user_id)

    if user_id != current_user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Your are not allowd to view the ticket. Please sign in to continue")

    conn.close()

    return {"seat_id": booking["seat_id"], "booking_id" : booking['booking_id'], "booking_status": 1}
    # return {} # The respone of the schema will be on the response model


# * Get Ticket by ID
@router.get("/print-ticket/{id}", response_model=schemas.BookingOut) # 
def get_booking(id: int, current_user: int = Depends(oauth2.get_current_user)):
   
    # posts = db.query(models.Post).filter(models.Post.title.contains(search)).limit(limit).offset(skip).all()
    conn, cursor = get_db()
    sql_query = '''
                SELECT users.user_id, seat_id, fname, lname, phone_num, arrival_time,  departure_time, departure_city, arrival_city
                FROM bookings
                JOIN users ON bookings.user_id = users.user_id
                JOIN schedule ON bookings.schedule_id = schedule.schedule_id
                JOIN routes ON schedule.route_id = routes.route_id
                WHERE bookings.booking_id = %s
                '''
    cursor.execute(sql_query, (id,))
    booking = cursor.fetchone()
    current_user_id = current_user['user_id']
    user_id = booking['user_id']

    if not booking:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Booking with id #:- {id} not found")

    if user_id != current_user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Your are not allowd to view the ticket. Please sign in to continue")

    conn.close()

    return booking # The 

# ?#################################  POST Methods #################################

@router.post("/single", status_code=status.HTTP_201_CREATED) # , response_model=schemas.BookingOut
def create_booking(booking: schemas.BookingCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    schedule_query = '''
                    SELECT schedule_id 
                    FROM schedule
                    JOIN routes ON schedule.route_id = routes.route_id
                    JOIN train ON schedule.train_id = train.train_id
                    WHERE "departure_date" = %s
                    AND "departure_city" = %s
                    AND "arrival_city" = %s
                    AND "train_type" = %s
                    '''
    try:
        result = cursor.execute(schedule_query, (booking.departure_date, booking.departure_city, booking.arrival_city, booking.class_type)).fetchone()
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Journeys Found")

    schedule_id = result["schedule_id"]

    insert_query = '''
                INSERT INTO Bookings
                (schedule_id, user_id, seat_id)
                VALUES(%s, %s, %s)
                '''
    current_user_id = current_user['user_id']
    cursor.execute(insert_query, (schedule_id, current_user_id, booking.seat_id))

    conn.commit()
    conn.close()


@router.post("/multiple", status_code=status.HTTP_201_CREATED) # , response_model=schemas.BookingOut
def multiple_bookings(bookings: List[schemas.BookingCreate], current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    schedules = []
    schedule_query = '''
                    SELECT schedule_id 
                    FROM schedule
                    JOIN routes ON schedule.route_id = routes.route_id
                    JOIN train ON schedule.train_id = train.train_id
                    WHERE "departure_date" = %s
                    AND "departure_city" = %s
                    AND "arrival_city" = %s
                    AND "train_type" = %s
                    '''
    try:
        for booking in booking:
            result = cursor.execute(schedule_query, (booking.departure_date, booking.departure_city, booking.arrival_city, booking.class_type)).fetchone()
            schedule_id = result["schedule_id"]
            schedules.append(schedule_id)
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Journeys Found")


    insert_query = '''
                INSERT INTO Bookings
                (schedule_id, user_id, seat_id)
                VALUES(%s, %s, %s)
                '''

    current_user_id = current_user['user_id']

    for booking in bookings:
        cursor.execute(insert_query, (schedule_id, current_user_id, booking.seat_id))

    conn.commit()
    conn.close()



@router.post("/booking/friend", status_code=status.HTTP_201_CREATED) # , response_model=schemas.BookingOut
def create_booking_friend(booking: schemas.BookingCreate, current_user: int = Depends(oauth2.get_current_user)):

    create_booking(booking, current_user)
    

# ?#################################  UPDATE Methods #################################


@router.put("/update-booking/{id}")
def update_booking(booking: schemas.BookingUpdate, id: int, current_user: int = Depends(oauth2.get_current_user)):
    
    conn, cursor = get_db()

    get_id_query = '''
                    SELECT user_id
                    FROM bookings 
                    WHERE booking_id = %s
                    ORDER BY created_at
                    DESC
                  '''
    cursor.execute(get_id_query, (id,))    
    user = cursor.fetchall()
    user_id = user[0]['user_id']

    if user_id != current_user['user_id']:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authorized")

    query = '''
            UPDATE bookings
            SET seat_id = %s,
            name = %s,
            cnic = %s
            WHERE "booking_id" = %s
            '''
    cursor.execute(query, (booking.seat_id, booking.name, booking.cnic, id))
    conn.commit()
    conn.close()



# ?#################################  DELETE Methods #################################

@router.delete("/cancel/{id}")
def delete_booking(id: int, current_user: int = Depends(oauth2.get_current_user)):

    conn, cursor = get_db()

    get_id_query = '''
                    SELECT user_id
                    FROM bookings 
                    WHERE booking_id = %s
                    ORDER BY created_at
                    DESC
                  '''
    cursor.execute(get_id_query, (id,))    
    user = cursor.fetchall()
    user_id = user[0]['user_id']

    if user_id != current_user['user_id']:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authorized")

    query = '''
            DELETE FROM bookings
            WHERE "booking_id" = %s
            '''
    cursor.execute(query, (id,))
    conn.commit()
    conn.close()


