import './Admin_t.css';

function Admin() {
  return (
    <div className="containerr">
    
    <div className="title">Book Ticket for someone</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
        <div className="input-box">
            <span className="details">From</span>
            <input type="text" placeholder="Enter your starting Point" required/>
          </div>
          <div className="input-box">
            <span className="details">To</span>
            <input type="text" placeholder="Enter your Destination" required/>
          </div>
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required />
          </div>
          <div className="input-box">
            <span className="details">Train Id</span>
            <input type="text" placeholder="Enter the Train name/ ID" required />
          </div>
          
        </div>
        
        <div className="button">
          <input type="submit"  value="Bock Your Ticket" />
        </div>
      </form>
    </div>
  </div>

  );
}

export default Admin;


// import { useState } from "react";
// import './Registration.css';
// import FormInput from "./Component/FormInput";
// import { useEffect } from "react";

// const Registration = () => {
//   const [values, setValues] = useState({
//     id: "",
//     start: "",
//     end: "",
//     fullname: "",
//     email: "",
//     date: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "id",
//       type: "text",
//       placeholder: "id",
//       errorMessage:
//         "id should be 3-5 characters and shouldn't include any special character!",
//       label: "id",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "start",
//       type: "text",
//       placeholder: "start",
//       errorMessage:
//         "name should be 3-20 characters and shouldn't include any special character!",
//       label: "start",
//       pattern: "^[A-Za-z0-9]{3,20}$",
//       required: true,
//     },
//     {
//         id: 3,
//         name: "end",
//         type: "text",
//         placeholder: "end",
//         errorMessage:
//           "name should be 3-20 characters and shouldn't include any special character!",
//         label: "end",
//         pattern: "^[A-Za-z0-9]{3,20}$",
//         required: true,
//       },
//       {
//         id: 4,
//         name: "name",
//         type: "text",
//         placeholder: "Enter your full name",
//         errorMessage:
//           "name should be 3-20 characters and shouldn't include any special character!",
//         label: "name",
//         pattern: "^[A-Za-z0-9]{3,20}$",
//         required: true,
//       },
//     {
//       id: 5,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "It should be a valid email address!",
//       label: "Email",
//       required: true,
//     },
//     {
//       id: 6,
//       name: "date",
//       type: "date",
//       placeholder: "Booking date",
//       label: "date",
//     },
    
//   ];

//   const handleSubmit = (e) => {
//     fetch("http://localhost:8000/Admin_t/",
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
//     const response= await fetch("http://localhost:8000/Admin_t")
//     const data=await response.json();
//     setData(data);
//   } // <-- add empty dependency array

//     catch(err){
//       console.log("There must have been an error somewhere in your code", err?.message);
//     };
//   }
//   fetchData();
//   },[]);

//   return (
//     <div className="app">
//       <form onSubmit={handleSubmit}>
//         <h1>Booking</h1>
//         {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
//         <button>Confirm your Ticket {values}</button>
//       </form>
//     </div>
//   );
// };

// export default Registration;
