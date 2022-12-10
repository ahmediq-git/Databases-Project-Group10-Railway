import { useState } from "react";
import './Registration.css';
import FormInput from "./Component/FormInput";
import { useEffect } from "react";
import {Link} from 'react-router-dom';

const Status = () => {
  const [values, setValues] = useState({
    id: "",});

  const inputs = [
    {
      id: 1,
      name: "id",
      type: "text",
      placeholder: "Enter ticket ID",
      errorMessage:
        "id  should be 1-4 characters and shouldn't include any special character!",
      label: "id",
      pattern: "^[A-Za-z0-9]{1,4}$",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    fetch("http://localhost:8000/Status/",
    {
      method: "POST",
      mode: 'no-cors',
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    }
    ).then((result) => {
    console.log(result)
    });
    e.preventDefault();
  };

  const onChange = (e) => {
    // setItem(e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [data, setData]= useState([]);

   
  useEffect(() => {
  const fetchData = async() => {
    try{
    const response= await fetch("http://localhost:8000/Status")
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
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>check your ticket status</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="button">
          <Link to = '/Bool'>
          <input type="submit"  value="Status" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Status;
