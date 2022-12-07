import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("awesomeLeadsToken"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch("/api/users/me", requestOptions);

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("awesomeLeadsToken", token);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};


// import './Registration.css';
// import React, { useContext, useState } from "react";
// import { UserContext } from "./Context/UserContext";

// const Registration = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmationPassword, setConfirmationPassword] = useState("");

//   const [errorMessage, setErrorMessage] = useState("");
//   const [, setToken] = useContext(UserContext);
  
//     const submitRegistration = async () => {
//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: email, hashed_password: password }),
//       };
  
//       const response = await fetch("/api/users", requestOptions);
//       const data = await response.json();
  
//       if (!response.ok) {
//         setErrorMessage(data.detail);
//       } else {
//         setToken(data.access_token);
//       }
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (password === confirmationPassword && password.length > 5) {
//         submitRegistration();
//       } else {
//         setErrorMessage(
//           "Ensure that the passwords match and greater than 5 characters"
//         );
//       }
//     };
  
//     return (
//       <div className="column">
//         <form className="box" onSubmit={handleSubmit}>
//           <h1 className="title has-text-centered">Register</h1>
//           <div className="field">
//             <label className="label">Email Address</label>
//             <div className="control">
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="input"
//                 required
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Password</label>
//             <div className="control">
//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="input"
//                 required
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Confirm Password</label>
//             <div className="control">
//               <input
//                 type="confirmationPassword"
//                 placeholder="Enter password"
//                 value={confirmationPassword}
//                 onChange={(e) => setConfirmationPassword(e.target.value)}
//                 className="input"
//                 required
//               />
//             </div>
//           </div>
//           <br />
//           <button className="button is-primary" type="submit">
//             Register
//           </button>
//         </form>
        
      
    {/* <div className="containerr">
    
    <div className="title">Registration</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
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
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label for="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label for="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label for="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit"  value="Register" />
        </div>
      </form>
    </div>
  </div>
  </div>
   */}
//    </div>
//   );
// }

// export default Registration;
