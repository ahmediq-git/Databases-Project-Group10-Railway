from fastapi import HTTPException, status, Depends, APIRouter
from sqlalchemy.orm import Session
from .. import schemas,  oauth2
from ..database import get_db

router = APIRouter(
    prefix="/jobs",
    tags=['Jobs']
)

@router.get("/jobs", response_model=schemas.Job)
def vote(current_user = Depends(oauth2.get_current_user)): 
    
    sql_query = '''
                SELECT * FROM jobs
                JOIN routes
                ON routes.route_id = jobs.job_id
                WHERE status = false
                '''
    conn, cursor = get_db()
    cursor.execute(sql_query)
    results = cursor.fetchall()


    return results
            

