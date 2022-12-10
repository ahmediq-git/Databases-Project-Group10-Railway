import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import { useEffect } from "react";
import { useState } from "react";

function VerticalExample() {
  const [data, setData]= useState([]);
   
  useEffect(() => {
  const fetchData = async() => {
    try{
    const response= await fetch("http://localhost:8000/Station")
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
    <Stack fluid-flow gap={3} style = {{ background: 'black',height: '100%', position: 'relative' }}>
      <div className="bg-pink border" style = {{ width: '40%', height: '10%', marginLeft: '20%', marginTop: '10%' , backgroundColor: "pink"}}>First item</div>
      <div className="bg-light border" style = {{ width: '40%', height: '10%', marginLeft: '20%',backgroundColor: "pink"}}>Second item</div>
      <div className="bg-light border"style = {{ width: '40%', height: '10%', marginLeft: '20%', backgroundColor: "pink"}}>Third item</div>
    </Stack>
  );
}

export default VerticalExample;