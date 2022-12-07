import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bcar from './Bcargo'
import Home from './Component/Employhome'
// import Root from './Addrout.jsx'
// import Status from './Status';
import Sch from './Addsch';
import Registration from './Registration';
// import Newpasswors from './Newpasswors';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Oetp from './Oetp';
// import Fpass from './Fpass';
import Booktick from './Component/Booktick';
// import Employee from './Component/Employee';
// import Admin from './Admin_t';
// import Search from './Search_T';
import Station from './Station'
import Cargo from './Cargo'
// import Driver from './Driverduty'
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

import reportWebVitals from './reportWebVitals';
// import Addstaff from './Addstaff';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Bcar /> */}
    {/* < Root /> */}
    {/* < Sch /> */}
    {/* < Status /> */}
    {/* <Booktick /> */}
    {/* < Newpasswors /> */}
    {/* <Registration /> */}
{/* <Router>
  <Routes>
    <Route exact path='/' element = {<Fpass />}></Route>
    <Route exact path='/oetp' element={< Oetp />}></Route>
    <Route exact path='/Newpasswors' element={< Newpasswors />}></Route>

  </Routes>
</Router> */}


{/* <Router>
  <Routes>
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
    

  </Routes>
</Router> */}

{/* <Router>
  <Routes>
    <Route exact path='/' element = {<Home />}></Route>
    <Route exact path='/Admin_t' element={< Admin_t />}></Route>

  </Routes>
</Router> */}
      
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
    <Sta />
  </React.StrictMode>
);

// If you want to start measuring performance in yo`ur app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
