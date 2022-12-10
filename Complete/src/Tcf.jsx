import './Registration.css';
import {Link} from 'react-router-dom';
function Find() {
  return (
    <div className="containerr">
    
    <div className="title">Jounery Details</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Start</span>
            <input type="text" placeholder="Lahore" required/>
          </div>
          <div className="input-box">
            <span className="details">End</span>
            <input type="text" placeholder="Karachi" required/>
          </div>
          <div className="input-box">
            <span className="details">Train</span>
            <input type="text" placeholder="Speedo 12" required />
          </div>
          <div className="input-box">
            <span className="details">Time</span>
            <input type="text" placeholder="Leaving at 5PM today" required />
          </div>
          </div>
          
        
      </form>
    </div>
  </div>

  );
}

export default Find;