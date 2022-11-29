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

const Forgetpassword = () => {
  const [values, setValues] = useState({
    phone: "",
    
  });

  const inputs = [
    
    {
      id: 1,
      name: "email/Phone",
      type: "email",
      placeholder: "Email/Phone",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
        <Link to = './oetp'>
             <input type="submit" value="Confirmation"/>
           </Link>
        </button>
      </form>
    </div>
  );
};

export default Forgetpassword;
