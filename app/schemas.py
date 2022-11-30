from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr

# * #################################  HOME #################################

class AllSchedule(BaseModel):

    departure_city: str
    arrival_city: str
    departure_date: str
    train_name: str
    train_type: str 


# * #################################  USER #################################


class UserOut(BaseModel):
    id: int
    email: EmailStr
    created_at: str


class UserCreate(BaseModel):
    fname: str
    lname: str
    email: EmailStr # pip install email-validator (already installed when we did pip install fastapi[all])
    password: str
    phone_num: int
    cnic: str
    dob: str
    city: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserUpdate(BaseModel):
    old_password: str
    new_password: str


# * ################################# Bookings #################################


class BookingBase(BaseModel):
    seat_id: int

class BookingOut(BaseModel):
    seat_id: int
    fname: str
    lname: str
    phone_num: int
    # cnic: str
    arrival_time: datetime
    departure_time: datetime
    departure_city: str
    arrival_city: str

    

class BookingStatus(BookingBase):
    booking_id: int
    booking_status: bool


class BookingCreate(BookingBase):
    departure_city: str
    arrival_city: str
    class_type: str
    seat_id: int
    # arrival_time: Optional[datetime] = None
    # departure_time: Optional[datetime] = None
    departure_date: str

class BookingCreateFriend(BookingCreate):
    cnic: str
    name: str # In case of booking for friend 

class BookingUpdate(BaseModel):
    name: Optional[str] = None
    cnic: Optional[str] = None
    seat_id: Optional[int] = None




# * ################################# Cargo #################################

class CargoBase(BaseModel):
    cargo_id: int
    route_id: int
    train_id: int
    user_id: int
    weight: float

class CargoCreate(CargoBase):
    pass

class CargoOut(CargoBase):
    pass



# * ################################# Staff #################################

class JobOut(BaseModel):

    job_id: int
    job_type: str
    departure_city: str
    arrival_city: str
    distance: int
    departure_time: datetime
    arrival_time: datetime
    train_name: str
    train_type: str




# * ################################# TOKEN #################################


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[str] = None


# * ################################# Admin #################################

class TrainCreate(BaseModel):
    train_name: str
    train_type: str
    num_seats: int




class DriverCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    cnic: str


class RouteCreate(BaseModel):
    arrival_station_id: int
    departure_station_id: int
    distance: int
    departure_city: str
    arrival_city: str


class ScheduleCreate(BaseModel):
    train_id: int
    route_id: int
    arrival_time: datetime
    departure_time: datetime
    departure_date: str


class JobCreate(BaseModel):
    route_id: int
    schedule_id: int
    job_type: str

class DelegateStaff(BaseModel):
    emp_id: int



