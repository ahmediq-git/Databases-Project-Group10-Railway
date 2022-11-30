from fastapi import FastAPI
# from .database import engine
from .routers import staff, user, auth, bookings, cargo, admin, home
# from fastapi.middleware.cors import CORSMiddleware


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
app.include_router(staff.router)
app.include_router(admin.router)
app.include_router(home.router)


@app.get("/")
def hello():
    return {"message": "hello world"}

 
