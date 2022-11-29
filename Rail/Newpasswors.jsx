// import './Newpasswors.css';

// function Newpasswors() {
//   return (
//     <div className="containern">
//             <div className="title">New  Password</div>
//                 <div className="content">
//                  <form action="#">
//                     <div className="user-details">
//                         <div className="input-box">
//                              <span className="details">Enter your new Password</span>
//                             <input type="text" placeholder="Enter valid Password" required />
//                         </div>
//                         <div className="input-box">
//                              <span className="details">Enter your new Password</span>
//                             <input type="text" placeholder="ReEnter valid Password" required />
//                         </div>
          
//                     </div>
        
//                  <div className="button">
//                     <input type="submit" value="Confirmation" />
//                 </div>
//                 </form>
//              </div>
//         </div>
//   );
// }

// export default Newpasswors;



import { useState } from "react";
import './Registration.css';
import FormInput from "./Component/FormInput";

const Password = () => {
  const [values, setValues] = useState({
    
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 5-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,20}$`,
      required: true,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
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
        <h1>Update Password</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Update</button>
      </form>
    </div>
  );
};

export default Password;