import './Admin_t.css';

function Admin() {
  return (
    <div className="containerr">
    
    <div className="title">Book Your Ticket</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
        <div className="input-box">
            <span className="details">From</span>
            <input type="text" placeholder="Enter your starting Point" required/>
          </div>
          <div className="input-box">
            <span className="details">To</span>
            <input type="text" placeholder="Enter your Destination" required/>
          </div>
          
          <div className="input-box">
            <span className="details">Train Id</span>
            <input type="text" placeholder="Enter the Train name/ ID" required />
          </div>
          
        </div>
        
        <div className="button">
          <input type="submit"  value="Bock Your Ticket" />
        </div>
      </form>
    </div>
  </div>

  );
}

export default Admin;