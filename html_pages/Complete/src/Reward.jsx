import './Reward.css';
import train from './train4.jpg'
import { useEffect } from "react";
import { useState } from "react";
function Cp() {
  const [data, setData]= useState([]);
  useEffect(() => {
  const fetchData = async() => {
    try{
    const response= await fetch("http://localhost:8000/Reward")
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
    <div className="up">
    <div className = "stamp">
      <div className = "he">
          <h1>99&cent; Flat OFF</h1>
      </div>
      <div className = "pe">
          <p>Buy 2 ticket to get this coupon</p>
      </div>

    </div>
    <div className = "stamp">
    <div className = "he">
        <h1>99&cent; Flat OFF</h1>
    </div>
    <div className = "pe">
        <p>Buy 2 ticket to get this coupon</p>
    </div>

  </div>
  <div className = "stamp">
  <div className = "he">
      <h1>99&cent; Flat OFF</h1>
  </div>
  <div className = "pe">
      <p>Buy 2 ticket to get this coupon</p>
  </div>

</div>
<div className = "stamp">
      <div className = "he">
          <h1>99&cent; Flat OFF</h1>
      </div>
      <div className = "pe">
          <p>Buy 2 ticket to get this coupon</p>
      </div>

    </div>
    </div>
  );
}

export default Cp;
