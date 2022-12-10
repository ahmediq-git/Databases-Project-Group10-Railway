// import './Oetp.css';
import {Link} from 'react-router-dom';
// function Oetp() {
//   return (
//     <div className="containero">
    
//     <div className="title">Confirm your contact Number</div>
//     <div className="content">
//       <form action="#">
//         <div className="user-details">
//           <div className="input-box">
//             <span className="details">Enter Your OTP</span>
//             <input type="text" placeholder="Enter OTP" required/>
//           </div>
          
//         </div>
        
//         <div className="button">
//           <Link to = '/Newpassword'>
//             <input type="submit" value="Confirmation"/>
//           </Link>
//         </div>
//       </form>
//     </div>
//   </div>
//   );
// }

// export default Oetp;


import { useState } from "react";
import './Registration.css';
import FormInput from "./Component/FormInput";
import { useEffect } from "react";

const OETP = () => {
  const [values, setValues] = useState({
    oetp: "",
    
  });

  const inputs = [
    
    {
      id: 1,
      name: "OETP",
      type: "text",
      placeholder: "Enter Oetp",
      errorMessage:
        "OETP should be 3-5 characters and shouldn't include any special character!",
      label: "OETP",
      
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    fetch("http://localhost:8000/Oetp/",
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
    const response= await fetch("http://localhost:8000/Oetp")
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
        <h1>OETP </h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>
            <Link to = '/Newpasswors'>
            <input type="submit" value="Confirmation"/>
              </Link>
              </button>
        </form>
    </div>
  );
};

export default OETP;
