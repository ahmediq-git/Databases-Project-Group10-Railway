import Button from 'react-bootstrap/Button';
import train from './train4.jpg'
import {Link} from 'react-router-dom';
import './Registration.css';
import './Booktick.css';


function Home() {
  return (
    < div className = "App">
    <div className="Cards">
    <Button className="Heading"> Employee Home Page</Button>
    <div className="card">
                     <img className="im" src={train} style = {{width: '200px'} }></img>
          
                     <h1 className = "head">View Tasks </h1>
                    <p className = "par">Here Employee can check their duties </p>
                            <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                                     <button input type="submit" className="bt">
                                         <Link to = '/Fd'>
                                         Check Duty
                                         </Link>
                                      </button>
                                     



                 </div> 
                 
     </div>
     <div className="card">
            <img className="im" src={train} style = {{width: '200px'} }></img>
            <h1 className = "head">Book ticket </h1>
            <p className = "par">Here Employee can book ticket for someone </p>
            <div className = "bt">
            <button input type="submit" className="bt">
                         <Link to = '/Admin_t'>
                            Add
                         </Link>
                             {/* style = {{justifyContent: centered }} */}
                    </button>
        
            </div>  
    </div>

        

    <div className="card">
            <img className="im" src={train} style = {{width: '200px'} }></img>
            <h1 className = "head">St inf </h1>
            <p className = "par">Here Employee can check the station information </p>
            <div className = "bt">
                    <button input type="submit" className="bt">
                         <Link to = '/stinf'>
                        Add
                         </Link>
                             {/* style = {{justifyContent: centered }} */}
                    </button>
        
            </div>  
    </div>


    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          <h1 className = "head">Schudles </h1>
          <p className = "par">Here Employee can check schudle </p>
            <div className = "bt">
            <button input type="submit" className="bt">
                    <Link to = '/Addtrain'>
                    Add
                     </Link>
                 </button>
        
            </div>
    </div>
    </div>
    </div>
  );
}
export default Home;