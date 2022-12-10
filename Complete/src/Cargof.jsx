import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Registration.css"
const Test = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  Test();
}, []);
const Test = () => { 
    
  axios
    .get('http://localhost:3000/')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    
 
    <div className='item-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>

                <div className="containerr">
    
        <div className="title">Registration</div>
         <div className="content">
           <form action="#">
             <div className="user-details">
               <div className="input-box">
                 <span className="details">Full Name</span>
                 <input type="text" placeholder="email" required/>
               </div>
               <div className="input-box">
                 <span className="details">Username</span>
                 <input type="text" placeholder= "email"required/>
               </div>
               <div className="input-box">
                 <span className="details">Emails</span>
                 <input type="text" placeholder="email" required />
               </div>
               <div className="input-box">
                 <span className="details">Phone Number</span>
                 <input type="text" placeholder="email" required />
               </div>
               <div className="input-box">
                 <span className="details">Password</span>
                 <input type="text" placeholder="email" required />
               </div>
               <div className="input-box">
                 <span className="details">Confirm Password</span>
                 <input type="text" placeholder="email" required />
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
        ) )
        
        }
    </div>
    

       );
};
export default Test;