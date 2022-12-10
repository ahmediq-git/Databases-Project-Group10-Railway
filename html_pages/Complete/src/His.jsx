import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './His.css'
import { useState } from "react";
import { useEffect } from "react";


function His() {
  const [data, setData]= useState([]);
  useEffect(() => {
  const fetchData = async() => {
    try{
    const response= await fetch("http://localhost:8000/His")
    const data=await response.json();
    setData(data);
  } // <-- add empty dependency array

    catch(err){
      console.log("There must have been an error somewhere in your code", err?.message);
    };
  }
  fetchData();
  },[]);
  return (
    <div className="all">
            <div className="bt">
                <Button> Date</Button>
                <Button> From</Button>
                <Button> To</Button>
                <Button> Fair</Button>
            </div>
            <div className="bte">
                <Button className = "con" > 
                        <p > 20/09/2022  </p>
                        <p > 20/09/2022  </p>
                        <p > 20/09/2022  </p>
                </Button>
                <Button className = "con"> 
                        <p > 20/09/2022  </p>
                </Button>
                <Button className = "con"> 
                        <p > 20/09/2022  </p>
                </Button>
                <Button className = "con"> 
                        <p > 20/09/2022  </p>
                </Button>
                
            </div>
    </div>
    
  );
}

export default His;