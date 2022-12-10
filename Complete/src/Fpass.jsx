// import './Fpass.css';
import {Link} from 'react-router-dom';
// import Oetp from './Oetp.js'
// function Fpass() {
//   return (
//     <div className="containerv">
//     <div className="title">Recover Your Password</div>
//         <div className="content">
//          <form action="#">
//             <div className="user-details">
//                 <div className="input-box">
//                      <span className="details">Enter your email address/ Phone Number / User name</span>
//                     <input type="text" placeholder="Enter valid information" required />
//                 </div>
  
//             </div>

//          <div className="button">
//          <Link to = './oetp'>
//             <input type="submit" value="Confirmation"/>
//           </Link>
//         </div>
//         </form>
//      </div>
// </div>
//   );
// }

// export default Fpass;


import { useState } from "react";
import './Registration.css';
import FormInput from "./Component/FormInput";
import { useEffect } from "react";

const Forgetpassword = () => {
  const [values, setValues] = useState({
    phone: "",
    
  });

  const inputs = [
    
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "email",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    fetch("http://localhost:8000/Fpass/",
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
    const response= await fetch("http://localhost:8000/Fpass")
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
        <h1>ForgotPassword</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>
            <Link to = '/oetp'>
            <input type="submit" value="Confirmation"/>
              </Link>
              </button>
      </form>
    </div>
  );
};

export default Forgetpassword;
