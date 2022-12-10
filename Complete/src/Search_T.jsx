// import './Search_T.css';
// import Button from 'react-bootstrap/Button';

// function Search() {
//   return (
//     <>
//     <div className="btn"> 
//     <Button variant="primary">schedule</Button>{' '}
//     </div>
//     <div className="containerr">
    
//     <div className="title">Search Your Ticket</div>
//     <div className="content">
//       <form action="#">
//         <div className="user-details">
//         <div className="input-box">
//             <span className="details">From</span>
//             <input type="text" placeholder="Enter your starting Point" required/>
//           </div>
//           <div className="input-box">
//             <span className="details">To</span>
//             <input type="text" placeholder="Enter your Destination" required/>
//           </div>
          
//           <div className="input-box">
//             <span className="details">Train Id</span>
//             <input type="text" placeholder="Enter the Train name/ ID" required />
//           </div>
          
//         </div>
        
//         <div className="button">
//           <input type="submit"  value="Bock Your Ticket" />
//         </div>
//       </form>
//     </div>
//   </div>
//   </>

//   );
// }

// export default Search;

import {Link} from 'react-router-dom';

import { useState } from "react";
import './Registration.css';
import FormInput from "./Component/FormInput";
import { useEffect } from "react";

const Search = () => {
  const [values, setValues] = useState({
    id: "",
    start: "",
    end: "",
    
  });

  const inputs = [
    {
      id: 1,
      name: "id",
      type: "text",
      placeholder: "Enter train ID",
      errorMessage:
        "Username should be 2 characters and shouldn't include any special character!",
      label: "id",
      required: true,
    },
    {
      id: 2,
      name: "start",
      type: "text",
      placeholder: "start",
      errorMessage:
        "stattion should be 3-20 characters and shouldn't include any special character!",
      label: "start",
      pattern: "^[A-Za-z0-9]{3,20}$",
      required: true,
    },
    {
      id: 3,
      name: "End",
      type: "text",
      placeholder: "End",
      errorMessage:
        "stattion should be 3-20 characters and shouldn't include any special character!",
      label: "End",
      pattern: "^[A-Za-z0-9]{3,20}$",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    fetch("http://localhost:8000/Search_T/",
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
    const response= await fetch("http://localhost:8000/Search_T")
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
        <h1>Search Ticket</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        

        <div className="button">
          <Link to = '/Tcf'>
          <input type="submit"  value="Search" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Search;
