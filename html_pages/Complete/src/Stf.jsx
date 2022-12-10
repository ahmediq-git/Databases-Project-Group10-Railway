import './Registration.css';
import {Link} from 'react-router-dom';
function Ct() {
  return (
    <div className="containerr">
    
    <div className="title">Cargo Details</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Starting city</span>
            <input type="text" placeholder="Lahore" required/>
          </div>
          <div className="input-box">
            <span className="details"> Current city</span>
            <input type="text" placeholder="Islambad" required/>
          </div>
          <div className="input-box">
            <span className="details"> Arrival City</span>
            <input type="text" placeholder="Karachi" required/>
          </div>
          <div className="input-box">
            <span className="details">Cargo weight</span>
            <input type="text" placeholder="2KG" required />
          </div>
          <div className="input-box">
            <span className="details">Time to deliver</span>
            <input type="text" placeholder="Approximately 2 days" required />
          </div>
          
        </div>
        
      </form>
    </div>
  </div>

  );
}

export default Ct;




// import { useState } from "react";
// import './Registration.css';
// import FormInput from "./Component/FormInput";
// import { useEffect } from "react";

// const Find = () => {
//   const [values, setValues] = useState({
//     username: "",
//     start: "",
//     end: "",
//     phone : "",
    
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "Username should be 3-16 characters and shouldn't include any special character!",
//       label: "Username",
//       pattern: "^[A-Za-z0-9]{3,16}$",
//       required: true,
//     },
//     {
//         id: 1,
//         name: "start",
//         type: "text",
//         placeholder: "Username",
//         errorMessage:
//           "Username should be 3-16 characters and shouldn't include any special character!",
//         label: "start",
//         pattern: "^[A-Za-z0-9]{3,16}$",
//         required: true,
//       },
//     {
//       id: 3,
//       name: "phone",
//       type: "text",
//       placeholder: "92xxxxxxxxxx",
//       errorMessage:
//         "Username should be 12 characters and shouldn't include any special character!",
//       label: "phone",
//       pattern: "^[A-Za-z0-9]{12}$",
//       required: true,
//     },
//     {
//       id: 4,
//       name: "birthday",
//       type: "date",
//       placeholder: "Birthday",
//       label: "Birthday",
//     },
//     {
//       id: 5,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//       label: "Password",
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//       required: true,
//     },
//     {
//       id: 6,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password",
//       pattern: values.password,
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     fetch("http://localhost:8000/",
//     {
//       method: "POST",
//       mode: 'no-cors',
//       // headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(values)
//     }
//     ).then((result) => {
//     console.log(result)
//     });
//     e.preventDefault();
//   };

//   const onChange = (e) => {
//     // setItem(e.target.value)
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const [data, setData]= useState([]);

   
//   useEffect(() => {
//   const fetchData = async() => {
//     try{
//     const response= await fetch("http://localhost:8000/")
//     const data=await response.json();
//     setData(data);
//   } // <-- add empty dependency array

//     catch(err){
//       console.log("There must have been an error somewhere in your code", err?.message);
//     };
//   }
//   fetchData();
//   },[]);
//   // const data = values
// //  console.log(values)
//   return (
//     <div className="app">
//       <form onSubmit={handleSubmit}>
//       <h1 className = "h1">Registeration </h1>

//         <h1>{data}</h1>
//         {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
//         <button className = "bt">
//           <Link to ="./Signin">
//           Submit {data}
//           </Link>
//           </button>

        
//       </form>
//     </div>
//   );
// };

// export default Registration;
