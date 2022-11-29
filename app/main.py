from fastapi import FastAPI
# from .database import engine
# from .routers import user, auth, bookings, cargo, jobs
import routers.user,routers.auth, routers.bookings, routers.cargo,routers.jobs
# from fastapi.middleware.cors import CORSMiddleware

# No longer created since we are now using alembic
# models.Base.metadata.create_all(bind=engine) 

app = FastAPI()

# origins=["*"] # * means public access but mostly we only want to allow our app to use it

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
 
app.include_router(bookings.router)
app.include_router(user.router)
app.include_router(auth.router)
app.include_router(cargo.router)
app.include_router(jobs.router)


@app.get("/")
def hello():
    return {"message": "hello world"}

 
