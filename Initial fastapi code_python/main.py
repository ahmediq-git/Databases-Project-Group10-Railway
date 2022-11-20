from fastapi import FastAPI, Body, Request, Form
from pydantic import BaseModel
from fastapi.templating import Jinja2Templates

app = FastAPI()

templates = Jinja2Templates(directory="htmldir")

@app.get("/")
def write_home(request: Request):
    return templates.TemplateResponse("home.html", {"request":request})

# @app.post("/")
# async def handle_form(assignment1: str = Form(),assignment2: str = Form(),assignment3: str = Form(),assignment4: str = Form()):
#     print(assignment1)
#     print(assignment2)
#     print(assignment3)
#     print(assignment4)

@app.post("/")
def update_item(fname: str = Form(...), lname: str = Form(...)):
    results = {"fname": fname, "lname": lname}
    print(fname)
    return results
