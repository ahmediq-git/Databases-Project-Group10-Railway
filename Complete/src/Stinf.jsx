import './Phome.css';
import train from './train4.jpg'
import { useEffect } from "react";
import { useState } from "react";

function Sta() {
  const [data, setData]= useState([]);   
  useEffect(() => {
  const fetchData = async() => {
    try{
    const response= await fetch("http://localhost:8000/Stinf")
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
    <div className="main">
         <div style={{ 
  backgroundImage: `url(${train})`,
  backgroundRepeat: 'no-repeat',
  width:'250px'
}}>
</div>
    <div className="containerr">
    
    <div className="title">Welcome to Pakistan Railway station</div>
    <div className="title">Station Information</div>
    <div className="content">
      <form action="#">

        <div className="button">
          <input type="submit"  value="Station id => 1" />
        </div>
        
        <div className="button">
          <input type="submit"  value="Station capacity ===> 3 Trains " />
        </div>

        <div className="button">
          <input type="submit"  value="Staff ====> 50 staff member" />
        </div>

        <div className="button">
          <input type="submit"  value="Ticket Center ===> 2 " />
        </div>
      </form>
    </div>
  </div>
  </div>

  );
}

export default Sta;
