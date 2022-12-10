from .. import schemas, oauth2, utils
from ..database import get_db
from fastapi import  Response, HTTPException, status, Depends, APIRouter
from fastapi import APIRouter, Depends, status, HTTPException, Response
from .. import  schemas, utils, oauth2
from ..database import db
from fastapi.security.oauth2 import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from fastapi.responses import RedirectResponse, HTMLResponse


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
                    INSERT INTO trains
                    (train_name, type_of_train, num_seats)
                    VALUES(%s, %s, %s)
                    '''
    cursor.execute(insert_query, (train.train_name, train.train_type, train.num_seats))

    conn.commit()
    conn.close()

    response = HTMLResponse("Train Inserted into database", status_code=status.HTTP_200_OK)
    return response


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
                    INSERT INTO staff
                    ("fname", "lname", "email", "password", "phone")
                    VALUES(%s, %s, %s, %s, %s)
                    '''

    cursor.execute(insert_query, (driver.fname, driver.lname, driver.email, driver.password, driver.phone))

    conn.commit()
    conn.close()

    response = HTMLResponse("Driver Inserted into Staff database", status_code=status.HTTP_200_OK)
    return response


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
                    (arrival_city, departure_city, arrival_station_id, departure_station_id)
                    VALUES(%s, %s, %s, %s)
                    '''
    cursor.execute(insert_query, (route.arrival_city, route.departure_city, route.arrival_station_id, route.departure_station_id))

    conn.commit()
    conn.close()

    response = HTMLResponse("Route Inserted into database", status_code=status.HTTP_200_OK)
    return response


# — Add Schedule
@router.post("/add-schedule")
def add_schedule(schedule: schemas.ScheduleCreate, current_user: int = Depends(oauth2.get_current_user)):


    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
        
    # print("*"*60)
    # print(schedule.arrival_time, schedule.departure_time)
    insert_query = '''
                    INSERT INTO schedule
                    (train_id, route_id, arrival_time, departure_date, departure_time)
                    VALUES(%s, %s, %s, %s, %s)
                    '''
    cursor.execute(insert_query, (schedule.train_id, schedule.route_id, schedule.arrival_time, schedule.departure_date, schedule.departure_time))

    conn.commit()
    conn.close()

    response = HTMLResponse("Schedule Inserted into database", status_code=status.HTTP_200_OK)
    return response

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
                    (job_info, date, schedule_id)
                    VALUES(%s, %s, %s)
                    '''
    cursor.execute(insert_query, (job.job_info, job.date, job.schedule_id))

    conn.commit()
    conn.close()

    response = HTMLResponse("Job Inserted into database", status_code=status.HTTP_200_OK)
    return response


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
                    UPDATE trains
                    SET train_name = %s,
                    type_of_train = %s,
                    num_seats = %s
                    WHERE train_id = %s
                    '''
    cursor.execute(update_query, (train.train_name, train.train_type, train.num_seats, id))

    conn.commit()
    conn.close()

    response = HTMLResponse("Train updated", status_code=status.HTTP_200_OK)
    return response


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
                    UPDATE staff
                    SET fname = %s,
                    lname = %s,
                    email = %s,
                    password = %s,
                    phone = %s
                    where staff_id = %s
                    '''
    cursor.execute(insert_query, (driver.fname, driver.lname, driver.email, driver.password, driver.phone, id))

    conn.commit()
    conn.close()

    response = HTMLResponse("Driver updated", status_code=status.HTTP_200_OK)
    return response



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
                    SET arrival_city = %s,
                    departure_city = %s,
                    arrival_station_id= %s,
                    departure_station_id = %s
                    WHERE route_id = %s
                    '''
    cursor.execute(insert_query, (route.arrival_city, route.departure_city, route.arrival_station_id, route.departure_station_id, id))

    conn.commit()
    conn.close()

    response = HTMLResponse("Route updated", status_code=status.HTTP_200_OK)
    return response


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

    response = HTMLResponse("Schedule updated", status_code=status.HTTP_200_OK)
    return response


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
                    SET job_info = %s,
                    date = %s,
                    schedule_id = %s
                    WHERE job_id = %s
                    '''
    cursor.execute(insert_query, (job.job_info, job.date, job.schedule_id, id))

    conn.commit()
    conn.close()

    response = HTMLResponse("Job Info updated", status_code=status.HTTP_200_OK)
    return response



# 14. Modify the duty of staff.
@router.put("/delegate-job/{id}")
def delegate_job(id: int, delegate: schemas.DelegateStaff, current_user: int = Depends(oauth2.get_current_user)):

    conn, cursor = get_db()

    email = current_user['email']
    admin_email = email[-10:]
    if admin_email != "@admin.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")

    find_employee = '''
                    SELECT staff_id
                    FROM staff
                    WHERE staff_id = %s
                    '''
    cursor.execute(find_employee, (delegate.emp_id,))
    driver_id = cursor.fetchone()

    if driver_id is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Employee found")
        
    insert_query = '''
                    UPDATE jobs
                    SET emp_id = %s,
                    job_accepted = True
                    WHERE job_id = %s
                    '''
    cursor.execute(insert_query, (delegate.emp_id, id))

    conn.commit()
    conn.close()

    response = HTMLResponse(f"Employee {delegate.emp_id} assigned to Job ID {id}", status_code=status.HTTP_200_OK)
    return response