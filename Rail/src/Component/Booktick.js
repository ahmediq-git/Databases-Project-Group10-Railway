// import Button from 'react-bootstrap/Button';
// import Card from './Card.js';
// import './Booktick.css';
// import Employee from './Employee';
import {Link} from 'react-router-dom';

// function Booktick() {
//   return (
//     <>
//     <div className="Cards">
//     <Button className="Heading"> Admin Home Page</Button>
//         <Card title="Add staff"  para="Here Admin Can Add / Modify the Employee information" imageSource ={require('./train4.jpg')} />
//         <Card title="Add Driver"  para="Here Admin Can Add / Modify the Driver information" imageSource ={require('./train4.jpg')} />
//         <Card title="Add  Train"  para="Here Admin Can Add / Modify the Train information" imageSource ={require('./train4.jpg')}/>
//         <Card title="View statistics"  para="Here Admin Can View / Modify the Railway statistics" imageSource ={require('./train4.jpg')}/>
//         <Card title="View Station information"  para="Here Admin Can View / Modify the station information" imageSource ={require('./train4.jpg')}/>
//         <Card title="Add Cargo"  para="Here Admin Can Add / Modify the Cargo information" imageSource ={require('./train4.jpg')}/>
//         <Card title="Add duties"  para="Here Admin Can Add / Modify the staff duties" imageSource ={require('./train4.jpg')}/>
//         <Card title="Add Rewards"  para="Here Admin Can Add / Modify rewards on tickets" imageSource ={require('./train4.jpg')}/>
//         <Card title="Add schudles"  para="Here Admin Can Add / Modify the Train timetable" imageSource ={require('./train4.jpg')}/>
        

        
//     </div>
//     </>
//   );
// }
// export default Booktick;

import Button from 'react-bootstrap/Button';
// import Card from './Card.js';
import train from './train4.jpg'
import './Booktick.css';
// c

function Booktick() {
  return (
    <>
    <div className="Cards">
    <Button className="Heading"> Admin Home Page</Button>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          
          <h1 className = "head">Add Staff </h1>
          <p className = "par">Here Admin can add the staff and can remove any member from staff </p>
          <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                  <button>
        <Link to = './Addstaff'>
             <input type="submit" value="Addd"/>
           </Link>
        </button>
        <button>
        <Link to = './Mstaff'>
             <input type="submit" value="Modify"/>
           </Link>
        </button>



                 </div> 
                 
    </div>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          
          <h1 className = "head">Add Driver </h1>
          <p className = "par">Here Admin can add the driver and can remove any driver </p>
          <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                  <button>
        <Link to = './Adddriver'>
             <input type="submit" value="Add"/>
           </Link>
        </button>
        <button>
        <Link to = './Mstaff'>
             <input type="submit" value="Modify"/>
           </Link>
        </button>



                 </div>  
                 
    </div>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          
          <h1 className = "head">Add Train </h1>
          <p className = "par">Here Admin can add the new train and can remove any Train </p>
          <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                  <button>
        <Link to = './Addtrain'>
             <input type="submit" value="Add"/>
           </Link>
        </button>
        <button>
        <Link to = './Mstaff'>
             <input type="submit" value="Modify"/>
           </Link>
        </button>



                 </div> 
                 
    </div>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          
          <h1 className = "head">View Statistics </h1>
          <p className = "par">Here admin can view, add and modify the statistics </p>
          <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                  <button>
        <Link to = './Addsch'>
             <input type="submit" value="View"/>
           </Link>
        </button>
        <button>
        <Link to = './Mstaff'>
             <input type="submit" value="Modify"/>
           </Link>
        </button>



                 </div>  
                 
    </div>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          
          <h1 className = "head">station information </h1>
          <p className = "par">Here Admin can view station information </p>
          <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                  <button>
        <Link to = './station'>
             <input type="submit" value="Add"/>
           </Link>
        </button>
        <button>
        <Link to = './Mstaff'>
             <input type="submit" value="Modify"/>
           </Link>
        </button>



                 </div>  
                 
    </div>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          
          <h1 className = "head">Add duty </h1>
          <p className = "par">Here admin can add or mofiy the duties </p>
          <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                  <button>
        <Link to = './Addduty'>
             <input type="submit" value="Add"/>
           </Link>
        </button>
        <button>
        <Link to = './Addduty'>
             <input type="submit" value="Modify"/>
           </Link>
        </button>



                 </div>  
                 
    </div>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          
          <h1 className = "head">Add Cargo </h1>
          <p className = "par">Here admin can add or modify the cargo </p>
          <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                  <button>
        <Link to = './Bcargo'>
             <input type="submit" value="Add"/>
           </Link>
        </button>
        <button>
        <Link to = './Cargo'>
             <input type="submit" value="Modify"/>
           </Link>
        </button>



                 </div>  
                 
    </div>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          
          <h1 className = "head">View schudles </h1>
          <p className = "par">Here admin can add and delete the schudles </p>
                <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                  <button>
        <Link to = './Addsch'>
             <input type="submit" value="Add"/>
           </Link>
        </button>
        <button>
        <Link to = './Mstaff'>
             <input type="submit" value="Confirmation"/>
           </Link>
        </button>



                 </div> 
                 
    </div>
    <div className="card">
          <img className="im" src={train} style = {{width: '200px'} }></img>
          
          <h1 className = "head">View Rewards </h1>
          <p className = "par">Here admin can add and delete the rewards </p>
                <div className = "bt">
                  {/* <Button  className="btn"   > <Link to = './Addduty'> </Link>  Add</Button>
                 <Button  className="btn" > <Link to = './Mstaff'> </Link>Modify </Button> */}
                  <button>
        <Link to = './Addsch'>
             <input type="submit" value="Add"/>
           </Link>
        </button>
        <button>
        <Link to = './Mstaff'>
             <input type="submit" value="Confirmation"/>
           </Link>
        </button>



                 </div> 
                 
    </div>
        {/* <Card title="Add staff"  para="Here Admin Can Add / Modify the Employee information" per  = {<Employee/>} imageSource ={require('./train4.jpg')} /> */}
        {/* <Card title="Add Driver"  para="Here Admin Can Add / Modify the Driver information" per  = "'./Addstaff'"  imageSource ={require('./train4.jpg')} />
        <Card title="Add  Train"  para="Here Admin Can Add / Modify the Train information" per  = "'./Addstaff'" imageSource ={require('./train4.jpg')}/>
        <Card title="View statistics"  para="Here Admin Can View / Modify the Railway statistics" per  = "'./Addstaff'"  imageSource ={require('./train4.jpg')}/>
        <Card title="View Station information"  para="Here Admin Can View / Modify the station information" imageSource ={require('./train4.jpg')}/>
        <Card title="Add Cargo"  para="Here Admin Can Add / Modify the Cargo information" per  = "'./Addstaff'" imageSource ={require('./train4.jpg')}/>
        <Card title="Add duties"  para="Here Admin Can Add / Modify the staff duties" per  = "'./Addstaff'" imageSource ={require('./train4.jpg')}/>
        <Card title="Add Rewards"  para="Here Admin Can Add / Modify rewards on tickets" per  = "'./Addstaff'"  imageSource ={require('./train4.jpg')}/>
        <Card title="Add schudles"  para="Here Admin Can Add / Modify the Train timetable" per  = "'./Addstaff'" imageSource ={require('./train4.jpg')}/>
         */}

        
    </div>
    </>
  );
}
export default Booktick;