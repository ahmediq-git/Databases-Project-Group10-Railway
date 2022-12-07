import Button from 'react-bootstrap/Button';
import train from './train4.jpg'
import {Link} from 'react-router-dom';
import './Booktick.css';
// c

function Home() {
  return (
    <>
    <div className="Cards">
    <Button className="Heading"> Employee Home Page</Button>
    <div className="card">
                     <img className="im" src={train} style = {{width: '200px'} }></img>
          
                     <h1 className = "head">View Tasks </h1>
                    <p className = "par">Here Employee can check their duties </p>
                            <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                                     <button>
                                         <Link to = './Addstaff'>
                                         <input type="submit" value="check duty"/>
                                         </Link>
                                      </button>
                                     



                 </div> 
                 
     </div>
     <div className="card">
            <img className="im" src={train} style = {{width: '200px'} }></img>
            <h1 className = "head">Book ticket </h1>
            <p className = "par">Here Employee can book ticket for someone </p>
            <div className = "bt">
                    <button>
                         <Link to = './Admin_t'>
                            <input type="submit" value="Add"/>
                         </Link>
                             {/* style = {{justifyContent: centered }} */}
                    </button>
        
            </div>  
    </div>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          <h1 className = "head">View Schudles </h1>
          <p className = "par">Here Employee can check schudle </p>
            <div className = "bt">
                <button>
                    <Link to = './Addtrain'>
                    <input type="submit" value="Add"/>
                     </Link>
                 </button>
        
            </div>
    </div>
    </div>
    </>
  );
}
export default Home;