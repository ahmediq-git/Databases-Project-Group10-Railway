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
                SELECT job_id, job_type, departure_city, arrival_city, distance, departure_time, arrival_time, train_name, train_type
                FROM jobs
                INNER JOIN routes
                ON routes.route_id = jobs.job_id
                INNER JOIN schedule
                ON jobs.schedule_id  = schedule.schedule_id
                INNER JOIN train
                on schedule.train_id = train.train_id
                WHERE status = false
                '''
    conn, cursor = get_db()
    cursor.execute(sql_query)
    results = cursor.fetchall()

    conn.close()

    return results




@router.post("/jobs/{id}")
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
                SET status = True,
                emp_id = %s
                WHERE job_id = %s
                '''
    conn, cursor = get_db()
    cursor.execute(sql_query, (emp_id, id))

    conn.close()
            
