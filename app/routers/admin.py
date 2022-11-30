from .. import schemas, oauth2, utils
from ..database import get_db
from fastapi import  Response, HTTPException, status, Depends, APIRouter
from typing import List, Optional
from sqlalchemy import func


router = APIRouter(
    prefix="/admin",
    tags=["Admin"] # Groups all post methods in the documentation
)

# TODO
# Admin 
# 15. Modify staff duties
# 16. Delete staff duties


# ? Completed
# — Add Train
# — Add Drivers
# — Add Route
# — Add Schedule
# — Add Jobs (covers uc 14)
# — Modify Train
# — Modify Drivers
# — Modify Route
# — Modify Schedule
# - Modify Jobs
# 14. Delegate the duty of staff.








# * #########################################3 POST Methods #############################################

# 17. Add information on
# — Add Train
@router.post("/add-train")
def add_train(train: schemas.TrainCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")

    insert_query = '''
                    INSERT INTO train
                    (train_name, type, num_seats)
                    VALUES(%s, %s, %s)
                    '''
    cursor.execute(insert_query, (train.train_name, train.train_type, train.num_seats))

    conn.commit()
    conn.close()



# — Add Drivers
@router.post("/add-driver")
def add_driver(driver: schemas.DriverCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]

    driver.password = utils.hash(driver.password)

    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        
    insert_query = '''
                    INSERT INTO drivers
                    (name, email, password, cnic)
                    VALUES(%s, %s, %s, %s)
                    '''
    cursor.execute(insert_query, (driver.name, driver.email, driver.password, driver.cnic))

    conn.commit()
    conn.close()


# — Add Route
@router.post("/add-route")
def add_route(route: schemas.RouteCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        
    insert_query = '''
                    INSERT INTO routes
                    (arrival_station_id, departure_station_id, distance, departure_city, arrival_city)
                    VALUES(%s, %s, %s, %s, %s)
                    '''
    cursor.execute(insert_query, (route.arrival_station_id, route.departure_station_id, route.distance, route.departure_city, route.arrival_city))

    conn.commit()
    conn.close()


# — Add Schedule
@router.post("/add-schedule")
def add_schedule(schedule: schemas.ScheduleCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        
    insert_query = '''
                    INSERT INTO schedule
                    (train_id, route_id, arrival_time, departure_time)
                    VALUES(%s, %s, %s, %s)
                    '''
    cursor.execute(insert_query, (schedule.train_id, schedule.route_id, schedule.arrival_time, schedule.departure_time))

    conn.commit()
    conn.close()


# — Add Job (covers uc 14)
@router.post("/add-job")
def add_job(job: schemas.JobCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        
    insert_query = '''
                    INSERT INTO jobs
                    (route_id, schedule_id, job_type)
                    VALUES(%s, %s, %s)
                    '''
    cursor.execute(insert_query, (job.route_id, job.schedule_id, job.job_type))

    conn.commit()
    conn.close()


# * #########################################3 Update Methods #############################################

# — Update Job (covers uc 14)
@router.put("/update-train/{id}")
def update_train(id: int, train: schemas.TrainCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        

    update_query = '''
                    UPDATE train
                    SET train_name = %s,
                    type = %s,
                    num_seats = %s
                    WHERE train_id = %s
                    '''
    cursor.execute(update_query, (train.train_name, train.train_type, train.num_seats, id))

    conn.commit()
    conn.close()


# — Update Drivers
@router.put("/update-driver/{id}")
def update_driver(id: int, driver: schemas.DriverCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]

    driver.password = utils.hash(driver.password)

    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        
    insert_query = '''
                    UPDATE  drivers
                    SET name = %s,
                    email = %s,
                    password = %s,
                    cnic = %s
                    where driver_id = %s
                    '''
    cursor.execute(insert_query, (driver.name, driver.email, driver.password, driver.cnic, id))

    conn.commit()
    conn.close()



# — Update Route
@router.put("/update-route/{id}")
def update_route(id: int, route: schemas.RouteCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        
    insert_query = '''
                    UPDATE routes
                    SET arrival_station_id = %s,
                    departure_station_id = %s,
                    distance = %s,
                    departure_city = %s,
                    arrival_city = %s
                    WHERE route_id = %s
                    '''
    cursor.execute(insert_query, (route.arrival_station_id, route.departure_station_id, route.distance, route.departure_city, route.arrival_city, id))

    conn.commit()
    conn.close()


# — UPdate Schedule
@router.put("/update-schedule/{id}")
def update_schedule(id: int, schedule: schemas.ScheduleCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        
    insert_query = '''
                    UPDATE schedule
                    SET train_id = %s,
                    route_id = %s,
                    arrival_time = %s,
                    departure_time = %s
                    WHERE schedule_id = %s
                    '''
    cursor.execute(insert_query, (schedule.train_id, schedule.route_id, schedule.arrival_time, schedule.departure_time, id))

    conn.commit()
    conn.close()


# — Update Job (covers uc 14)
@router.put("/update-job/{id}")
def update_job(id: int, job: schemas.JobCreate, current_user: int = Depends(oauth2.get_current_user)):

    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        
    insert_query = '''
                    UPDATE jobs
                    SET route_id = %s,
                    schedule_id = %s,
                    job_type = %s
                    WHERE job_id = %s
                    '''
    cursor.execute(insert_query, (job.route_id, job.schedule_id, job.job_type, id))

    conn.commit()
    conn.close()


# 14. Modify the duty of staff.
@router.put("/delegate-job/{id}")
def delegate_job(id: int, delegate: schemas.DelegateStaff, current_user: int = Depends(oauth2.get_current_user)):

    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")

    find_employee = '''
                    SELECT driver_id
                    FROM drivers
                    WHERE driver_id = %s
                    '''
    cursor.execute(find_employee, (delegate.emp_id,))
    driver_id = cursor.fetchone()

    if driver_id is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Employee found")
        
    insert_query = '''
                    UPDATE jobs
                    SET emp_id = %s,
                    status = True
                    WHERE job_id = %s
                    '''
    cursor.execute(insert_query, (delegate.emp_id, id))

    conn.commit()
    conn.close()