
import yfinance
import fastapi
from fastapi import FastAPI, Request, Depends, BackgroundTasks, Body, Request, File, UploadFile, Form, responses
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel 
import starlette.status as status
from fastapi.staticfiles import StaticFiles
from pathlib import Path


app = FastAPI()

# used for rendering css files
app.mount(
    "/static",
    StaticFiles(directory=Path(__file__).parent.parent.absolute() / "static"),
    name="static",
)


# appylying template class on each page in front end
login = Jinja2Templates(directory="LoginPage")
customer_dashboard = Jinja2Templates(directory="customer_dashboard")
Registration = Jinja2Templates(directory="Registration")
employee_dashboard= Jinja2Templates(directory="employee_dashboard")
PrintTicket = Jinja2Templates(directory="PrintTicket")


# all the connections, make sure to use the functions that have been made by Mesum accordingly


# the get functions are to render the page and return a respective dictionary
@app.get("/")
def login_function(request: Request):
    """
    renders login page along with the output dictionary
    """
    return login.TemplateResponse("project.html",  {"request": request})

# to be changed so customer dashboard of a particular user is shown
@app.get("/customer_dashboard")
def customerdashboard_function(request:Request):
    """
    renders the customer's dashboard after logging in along with its output dictionary
    """
    return customer_dashboard.TemplateResponse("index.html", {"request": request})

# -----------------------------------------
# to be converted to react
@app.get("/Registration")
def registration_function(request:Request):
    """
    renders the registration page along with its output dictionary
    """
    return Registration.TemplateResponse("registration.html", {"request": request})


@app.get("/OTP")
def registration_function(request:Request):
    """
    renders the registration page along with its output dictionary
    """
    return Registration.TemplateResponse("OTP.html", {"request": request})

@app.get("/FGH")
def registration_function(request:Request):
    """
    renders the registration page along with its output dictionary
    """
    return Registration.TemplateResponse("FGH.html", {"request": request, "foo":"variable"})

@app.get("/NP")
def registration_function(request:Request):
    """
    renders the registration page along with its output dictionary
    """
    return Registration.TemplateResponse("NP.html", {"request": request})

# -----------------------------------------

@app.get("/employee_dashboard")
def employeedashboard_function(request:Request):
    """
    renders the employee's dashboard after logging in along with its output dictionary
    """
    return employee_dashboard.TemplateResponse("index.html", {"request": request})


@app.get("/printyourticket")
def print_function(request:Request):
    """
    renders the print ticket page along with information of customer
    """
    return PrintTicket.TemplateResponse("/public/index.html",{"request": request})

# handling the form submitted on employee page
@app.post("/customer_dashboard/submitformcustomer")
async def handle_form(submit: str=Form(...)):
    """
    handles the button form on customer dashboard
    """
    print(submit)
    if submit=="Book a personal ticket":
        # go to this page
        pass
    elif submit=="Book a ticket for a loved one":
        # go to this page
        pass
    elif submit=="Search your ticket":
         # go to this page
        pass
    elif submit=="Track your shipment":
        # go to this page
        pass
    elif submit=="Print your ticket":
        # go to this page
        pass


# keeping this for the time being
customers={"customer": "customerpass"}
employees={"employees": "employeepass"}
admins={"admin":"adminpass"}


# NOTE: developer note, need to connect this with Mesum's login mechanism
# NOTE 2: need to make sure it goes to the customer dashboard pertaining to the user themselves
@app.post("/login")
async def handle_form(username: str=Form(...), password:str=Form(...)):
    """
    handles the button form on customer dashboard
    """
    
    print(username)
    print(password)

    if username in customers and customers[username]==password:
        return fastapi.responses.RedirectResponse(
            '/customer_dashboard',status_code=status.HTTP_302_FOUND)
    elif username in employees and employees[username]==password:   
        return fastapi.responses.RedirectResponse(
            '/employee_dashboard',status_code=status.HTTP_302_FOUND)
        pass
    else:
        #return login page again
        return fastapi.responses.RedirectResponse(
            '/',status_code=status.HTTP_302_FOUND)


@app.post("/submitusername")
async def handle_username(username: str=Form(...)):
   
    """
    handles the button submission of email address
    """
    print(username)

    # search for email id in database
    if username !="":
        return fastapi.responses.RedirectResponse(
            '/OTP',status_code=status.HTTP_302_FOUND)
    else:
        # invalid entry
        return fastapi.responses.RedirectResponse(
            '/FGH',status_code=status.HTTP_302_FOUND)



@app.post("/submitnewpass")
async def handle_newpass(newpass: str=Form(...), confirmnewpass:str=Form(...)):
   
    """
    handles the button submission of new password set
    """
    print(newpass, confirmnewpass)

    return fastapi.responses.RedirectResponse(
        '/',status_code=status.HTTP_302_FOUND)


@app.post("/submitotp")
async def handle_otp(OTP: str=Form(...)):
   
    """
    handles the button submission of otp
    """

    if OTP !="":
        return fastapi.responses.RedirectResponse(
            '/NP',status_code=status.HTTP_302_FOUND)
    else:
        # invalid entry
        return fastapi.responses.RedirectResponse(
            '/OTP',status_code=status.HTTP_302_FOUND)



@app.post("/submitregistration")
async def handle_registration(Username: str=Form(...), Fullname: str=Form(...), Email: str=Form(...),  PhoneNumber: str=Form(...),  Password: str=Form(...), ConfirmPass: str=Form(...)):
   
    """
    handles the button submission of registration
    """
    print(Username, Fullname, Email, PhoneNumber, Password, ConfirmPass)
    return fastapi.responses.RedirectResponse(
            '/',status_code=status.HTTP_302_FOUND)


    # to redirect after submitting form
    # if assignment=="aaa":
    #     return fastapi.responses.RedirectResponse(
    #         '/abc',status_code=status.HTTP_302_FOUND)
    # else:
    #     return fastapi.responses.RedirectResponse(
    #         '/',status_code=status.HTTP_302_FOUND)

# @app.post("/submitlogin")

