import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Astaff from "./Astaff"
import Test from './Cargof'
import  Cp from './Reward'
import Bcar from './Bcargo'
import Home from './Component/Employhome'
// import Root from './Addrout.jsx'
import Status from './Status';
import Sch from './Addsch';
import Registration from './Registration';
import Newpasswors from './Newpasswors';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Oetp from './Oetp';
import Fpass from './Fpass';
import Booktick from './Component/Booktick';
// import Employee from './Component/Employee';
// import Admin from './Admin_t';
// import Search from './Search_T';
import Station from './Station'
import Cargo from './Cargo'
import Reward from './Reward'
import Driver from './Driverduty1'
// import Employee from './Employeed'
import Adddriver from './Adddriver'
import Atrain from './Addtrain';
import Addstaff from './Addstaff'
import Addduty from './Addduty'
import Mstaff from './Mstaff';
import Admin_t from './Admin_t';
import Sin from './Signin';
import We from './Phome';
import Sta from './Stinf';
import Search_T from './Search_T';
import Stinf from './Stinf';
import His from './His';
import Self from "./Self";
import Stf from "./Stf";
import Bool from "./Bool"
import Tcf from "./Tcf";
import Adriver from "./Adriver";
import Mc from "./Mc";
import Md from "./Md";
import Du from "./Du";
import Mt from "./Mt";
import Ft from "./Ft";
import Fd from "./Fd";
import Fc from "./Fc";
import Shome from "./Shome";
import Ssign from "./Ssign";
import Psign from "./Ssign";
import Asign from "./Ssign";
import Uss from "./Uss";
import Pp from "./Pp"







// import Ind from "./Ind.html";
// import Card from './Card'

import reportWebVitals from './reportWebVitals';
// import Addstaff from './Addstaff';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
           {/* <Card/> */}
           {/* < Driver /> */}
           {/* <Test /> */}

    {/* <Card /> */}
    {/* <His/> */}
    {/* <Bcar /> */}
    {/* < Root /> */}
    {/* < Sch /> */}
    {/* < Status /> */}
    {/* <Booktick /> */}
    {/* < Newpasswors /> */}
    {/* <Registration /> */}
<Router>
  <Routes>
  <Route exact path='/' element = {<Registration />}></Route>
  <Route exact path='/Shome' element={< Shome />}></Route>
  <Route exact path='/Ssign' element={< Ssign />}></Route>
  <Route exact path='/Pp' element={< Pp />}></Route>
  <Route exact path='/Uss' element={< Uss />}></Route>
  <Route exact path='/Booktick' element={< Booktick />}></Route>
  <Route exact path='/Home' element={< Home />}></Route>
  <Route exact path='/We' element={< We />}></Route>
    <Route exact path='/Fpass' element = {<Fpass />}></Route>
    <Route exact path='/oetp' element = {<Oetp />}></Route>
    <Route exact path='/Newpasswors' element={< Newpasswors />}></Route>
    <Route exact path='/Signin' element={< Sin />}></Route>
    <Route exact path='/Phome' element = {<We />}></Route>
    <Route exact path='/Self' element = {<Self />}></Route>
    <Route exact path='/Admin_t' element = {<Admin_t />}></Route>
    <Route exact path='/Search_T' element={< Search_T />}></Route>
    <Route exact path='/Stf' element={< Stf />}></Route>
    <Route exact path='/Cargo' element = {<Cargo />}></Route>
    <Route exact path='/Tcf' element = {<Tcf />}></Route>
    <Route exact path='/Bool' element = {<Bool />}></Route>
    <Route exact path='/Station' element={< Station />}></Route>
    <Route exact path='/Reward' element = {<Reward />}></Route>   
    <Route exact path='/Status' element = {<Status />}></Route>
    <Route exact path='/Stinf' element={< Stinf />}></Route>
    <Route exact path='/His' element={< His />}></Route>









    <Route exact path='/Addtrain' element={< Atrain />}></Route>
    <Route exact path='/Admin_t' element={< Admin_t />}></Route>
    <Route exact path='/Stinf' element={< Stinf />}></Route>
    <Route exact path='/Fd' element={< Fd />}></Route>
    <Route exact path='/Addstaff' element = {<Addstaff />}></Route>
    <Route exact path='/Mstaff' element = {<Mstaff />}></Route>
    <Route exact path='/Adddriver' element={< Adddriver />}></Route>
    <Route exact path='/Addtrain' element = {<Atrain />}></Route>
    <Route exact path='/Station' element={< Station />}></Route>
    <Route exact path='/Cargo' element = {<Cargo />}></Route>
    <Route exact path='/Bcargo' element = {<Bcar />}></Route>
    <Route exact path='/Addduty' element={< Addduty />}></Route>
    <Route exact path='/Addsch' element = {<Sch />}></Route>
    <Route exact path='/Addduty' element={< Addduty />}></Route>
    <Route exact path='/Astaff' element={< Astaff />}></Route>
    <Route exact path='/Adriver' element={< Adriver />}></Route>
    <Route exact path='/Mc' element={< Mc />}></Route>
    <Route exact path='/Md' element={< Md />}></Route>
    <Route exact path='/Mt' element={< Mt />}></Route>
    <Route exact path='/Ft' element={< Ft />}></Route>
    <Route exact path='/Stinf' element={< Stinf />}></Route>
    <Route exact path='/Reward' element={< Reward />}></Route>
    <Route exact path='/Fd' element={< Fd />}></Route>
    <Route exact path='/Fc' element={< Fc />}></Route>
    <Route exact path='/Du' element={< Du />}></Route>




    





  </Routes>
</Router>


{/* <Router>
  <Routes>
  Employee
    <Route exact path='/' element = {<Home />}></Route>
    <Route exact path='/Addtrain' element={< Atrain />}></Route>
    <Route exact path='/Admin_t' element={< Admin_t />}></Route>
    <Route exact path='/Stinf' element={< Stinf />}></Route>
    <Route exact path='/Fd' element={< Fd />}></Route>
  


  </Routes>
</Router> */}


{/* <Router>
  <Routes>
  Admin
    <Route exact path='/' element = {<Booktick />}></Route>
    <Route exact path='/Addstaff' element = {<Addstaff />}></Route>
    <Route exact path='/Mstaff' element = {<Mstaff />}></Route>
    <Route exact path='/Adddriver' element={< Adddriver />}></Route>
    <Route exact path='/Addtrain' element = {<Atrain />}></Route>
    <Route exact path='/Station' element={< Station />}></Route>
    <Route exact path='/Cargo' element = {<Cargo />}></Route>
    <Route exact path='/Bcargo' element = {<Bcar />}></Route>
    <Route exact path='/Addduty' element={< Addduty />}></Route>
    <Route exact path='/Addsch' element = {<Sch />}></Route>
    <Route exact path='/Addduty' element={< Addduty />}></Route>
    <Route exact path='/Astaff' element={< Astaff />}></Route>
    <Route exact path='/Adriver' element={< Adriver />}></Route>
    <Route exact path='/Mc' element={< Mc />}></Route>
    <Route exact path='/Md' element={< Md />}></Route>
    <Route exact path='/Mt' element={< Mt />}></Route>
    <Route exact path='/Ft' element={< Ft />}></Route>
    <Route exact path='/Stinf' element={< Stinf />}></Route>
    <Route exact path='/Reward' element={< Reward />}></Route>
    <Route exact path='/Fd' element={< Fd />}></Route>
    <Route exact path='/Fc' element={< Fc />}></Route>
    <Route exact path='/Du' element={< Du />}></Route>
  </Routes>
</Router> */}

{/* <Router>
  <Routes>
  this is extra 
    <Route exact path='/' element = {<We />}></Route>
    <Route exact path='/Self' element = {<Self />}></Route>
    <Route exact path='/Admin_t' element = {<Admin_t />}></Route>
    <Route exact path='/Search_T' element={< Search_T />}></Route>
    <Route exact path='/Stf' element={< Stf />}></Route>
    <Route exact path='/Cargo' element = {<Cargo />}></Route>
    <Route exact path='/Tcf' element = {<Tcf />}></Route>
    <Route exact path='/Bool' element = {<Bool />}></Route>
    <Route exact path='/Station' element={< Station />}></Route>
    <Route exact path='/Reward' element = {<Reward />}></Route>   
    <Route exact path='/Status' element = {<Status />}></Route>
    <Route exact path='/Stinf' element={< Stinf />}></Route>
    <Route exact path='/His' element={< His />}></Route>
  </Routes>
</Router>  */}

{/* <Router>
  <Routes>
    <Route exact path='/' element = {<Home />}></Route>
    <Route exact path='/Admin_t' element={< Admin_t />}></Route>

  </Routes>
</Router> */}
      {/* < Reward/> */}
      

      {/* <Cp/> */}
      {/* < His /> */}
      
      
       {/* <Station/>  */}
       {/* <Cargo/> */}
       {/* <Driver/> */}
       {/* <Employee/> */}
       {/* <Adddriver/> */}
      {/* <Atrain/> */}
    {/* <Addstaff/> */}
   {/* <Addduty/>  */}
    {/* <Search /> */}
    {/* <Admin /> */}
    {/* <Newpasswors /> */}
    {/* <Sin /> */}
    {/* <We /> */}
    {/* <Sta /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in yo`ur app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
