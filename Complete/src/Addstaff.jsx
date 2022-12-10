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
import { useEffect } from "react";

const Addstaff = () => {
  const [values, setValues] = useState({
    id:"",
    tid: "",
    fname: "",
    lname: "",
    email: "",
    birthday: "",
    password: "",
  });

  const inputs = [
    {
        id: 1,
        name: "id",
        type: "text",
        placeholder: "Enter Staff id",
        errorMessage:
          "ID should be 1-4 characters and shouldn't include any special character!",
        label: "id",
        pattern: "^[A-Za-z0-9]{1,4}$",
        required: true,
      },
      {
        id: 2,
        name: "tid",
        type: "text",
        placeholder: "Enter Train id",
        errorMessage:
          "ID should be 1-4 characters and shouldn't include any special character!",
        label: "tid",
        pattern: "^[A-Za-z0-9]{1,4}$",
        required: true,
      },
    {
      id: 3,
      name: "fname",
      type: "text",
      placeholder: "Enter your first name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "fname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
        id: 4,
        name: "lname",
        type: "text",
        placeholder: "Enter your Last name",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "lname",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 6,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 7,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    fetch("http://localhost:8000/Addstaff/",
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
    const response= await fetch("http://localhost:8000/Addstaff")
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
        <h1>Add staff</h1>
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

export default Addstaff;
