// import './Registration.css';

// function Registration() {
//   return (
//     <div className="containerr">
    
//     <div className="title">Registration</div>
//     <div className="content">
//       <form action="#">
//         <div className="user-details">
//           <div className="input-box">
//             <span className="details">Full Name</span>
//             <input type="text" placeholder="Enter your name" required/>
//           </div>
//           <div className="input-box">
//             <span className="details">Username</span>
//             <input type="text" placeholder="Enter your username" required/>
//           </div>
//           <div className="input-box">
//             <span className="details">Email</span>
//             <input type="text" placeholder="Enter your email" required />
//           </div>
//           <div className="input-box">
//             <span className="details">Phone Number</span>
//             <input type="text" placeholder="Enter your number" required />
//           </div>
//           <div className="input-box">
//             <span className="details">Password</span>
//             <input type="text" placeholder="Enter your password" required />
//           </div>
//           <div className="input-box">
//             <span className="details">Confirm Password</span>
//             <input type="text" placeholder="Confirm your password" required />
//           </div>
//         </div>
//         <div className="gender-details">
//           <input type="radio" name="gender" id="dot-1"/>
//           <input type="radio" name="gender" id="dot-2"/>
//           <input type="radio" name="gender" id="dot-3"/>
//           <span className="gender-title">Gender</span>
//           <div className="category">
//             <label for="dot-1">
//             <span className="dot one"></span>
//             <span className="gender">Male</span>
//           </label>
//           <label for="dot-2">
//             <span className="dot two"></span>
//             <span className="gender">Female</span>
//           </label>
//           <label for="dot-3">
//             <span className="dot three"></span>
//             <span className="gender">Prefer not to say</span>
//             </label>
//           </div>
//         </div>
//         <div className="button">
//           <input type="submit"  value="Register" />
//         </div>
//       </form>
//     </div>
//   </div>

//   );
// }

// export default Registration;




import { useState } from "react";
import './Registration.css';
import FormInput from "./Component/FormInput";

const Sch = () => {
  const [values, setValues] = useState({
    sname: "",
    ename: "",
    tid : "",
    sid : "",
    date: "",
    
  });

  const inputs = [
    {
      id: 1,
      name: "sname",
      type: "text",
      placeholder: "Enter Starting station",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "sname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "ename",
      type: "text",
      placeholder: "Enter destination station",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "ename",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "tid",
      type: "text",
      placeholder: "Enter your train id",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "tid",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "sid",
      type: "text",
      placeholder: "Enter your route id",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "sid",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    
    {
      id: 5,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(data);
    // console.log(object.formEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // const data = values
//  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Add train</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Add</button>
      </form>
    </div>
  );
};

export default Sch;
