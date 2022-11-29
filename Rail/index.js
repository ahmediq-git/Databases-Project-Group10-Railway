import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Registration from './Registration';
// import Newpasswors from './Newpasswors';
// import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
// import Oetp from './Oetp';
// import Fpass from './Fpass';
// import Booktick from './Component/Booktick';
import Employee from './Component/Employee';
// import Admin from './Admin_t';
// import Search from './Search_T';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* < Newpasswors /> */}
    {/* <Registration /> */}
{/* <Router>
  <Routes>
    <Route exact path='/' element = {<Fpass />}></Route>
    <Route exact path='/oetp' element={< Oetp />}></Route>
    <Route exact path='/Newpasswors' element={< Newpasswors />}></Route>

  </Routes>
</Router> */}
      {/* <Booktick /> */}
      <Employee/>

    {/* <Search /> */}
    {/* <Admin /> */}
    {/* <Newpasswors /> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in yo`ur app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
