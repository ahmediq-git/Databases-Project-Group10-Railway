import './Registration.css';
import {Link} from 'react-router-dom';
function Bo() {
  return (
    <div className="containerr">
    
    <div className="title">Ticket Status</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Booked</span>
            <input type="text" placeholder="You have Booked ticketed" required/>
          </div>
          <div className="input-box">
            <span className="details"> From</span>
            <input type="text" placeholder="Lahore" required/>
          </div>
          <div className="input-box">
            <span className="details"> To</span>
            <input type="text" placeholder="Karachi" required/>
          </div>
          <div className="input-box">
            <span className="details">ID</span>
            <input type="text" placeholder="200" required />
          </div>
          <div className="input-box">
            <span className="details">Time</span>
            <input type="text" placeholder="5PM Sunday" required />
          </div>
          
        </div>
        
      </form>
    </div>
  </div>

  );
}

export default Bo;




