from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr


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
    arrival_time: datetime
    departure_time: datetime
    departure_city: str

class BookingCreateFriend(BookingCreate):
    cnic: str
    name: str # In case of booking for friend 





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



# * ################################# Jobs #################################

class Job(BaseModel):
    job_id: int
    route_id: int
    status: bool
    emp_id: int


# * ################################# TOKEN #################################


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[str] = None
