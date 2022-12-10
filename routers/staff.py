from fastapi import HTTPException, status, Depends, APIRouter
from sqlalchemy.orm import Session
from .. import schemas,  oauth2
from ..database import get_db
from typing import List

router = APIRouter(
    prefix="/staff",
    tags=['Staff']
)

@router.get("/jobs/find-all", response_model=List[schemas.JobOut])
def get_jobs(current_user = Depends(oauth2.get_current_user)): 
    
    conn, cursor = get_db()

    email = current_user['email']
    domain = email[email.find("@") : ]
    # admin_email = email[-10:]
    if domain != "@staff.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")

    sql_query = '''
                SELECT jobs.job_id, job_info, departure_city, arrival_city,  departure_time, arrival_time, train_name, type_of_train
                FROM jobs
                JOIN routes ON routes.route_id = jobs.job_id
                JOIN schedule ON jobs.schedule_id  = schedule.schedule_id
                JOIN trains on schedule.train_id = trains.train_id
                WHERE job_accepted = false 
                '''
    conn, cursor = get_db()
    cursor.execute(sql_query)
    results = cursor.fetchmany(10)

    conn.close()

    return results


@router.get("/jobs/assigned", response_model=List[schemas.JobOut])
def get_jobs(current_user = Depends(oauth2.get_current_user)): 
    
    conn, cursor = get_db()

    email = current_user['email']
    domain = email[email.find("@") : ]
    # admin_email = email[-10:]
    if domain != "@staff.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")

    sql_query = '''
                SELECT jobs.job_id, job_info, departure_city, arrival_city,  departure_time, arrival_time, train_name, type_of_train
                FROM jobs
                JOIN routes ON routes.route_id = jobs.job_id
                JOIN schedule ON jobs.schedule_id  = schedule.schedule_id
                JOIN trains on schedule.train_id = trains.train_id
                WHERE emp_id = %s 
                '''
    current_user_id = current_user['user_id']
    conn, cursor = get_db()
    cursor.execute(sql_query, (current_user_id,))
    results = cursor.fetchall()

    conn.close()

    return results



@router.post("/accept-job/{id}")
def accept_jobs(id: int, current_user = Depends(oauth2.get_current_user)): 
    
    conn, cursor = get_db()

    email = current_user['email']
    domain = email[email.find("@") : ]
    # admin_email = email[-10:]
    if domain != "@staff.com":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")

    emp_id = current_user["user_id"]

    sql_query = '''
                UPDATE jobs
                SET job_accepted = True,
                emp_id = %s
                WHERE job_id = %s
                '''
    conn, cursor = get_db()
    cursor.execute(sql_query, (emp_id, id))

    conn.close()
            
