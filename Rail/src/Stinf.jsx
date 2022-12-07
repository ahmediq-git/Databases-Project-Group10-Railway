import './Phome.css';
import train from './train4.jpg'

function Sta() {
  return (
    <div className="main">
         <div style={{ 
  backgroundImage: `url(${train})`,
  backgroundRepeat: 'no-repeat',
  width:'250px'
}}>
</div>
    <div className="containerr">
    
    <div className="title">Welcome to Pakistan Railway station</div>
    <div className="title">Station Information</div>
    <div className="content">
      <form action="#">

        <div className="button">
          <input type="submit"  value="Station id => 1" />
        </div>
        
        <div className="button">
          <input type="submit"  value="Station capacity ===> 3 Trains " />
        </div>

        <div className="button">
          <input type="submit"  value="Staff ====> 50 staff member" />
        </div>

        <div className="button">
          <input type="submit"  value="Ticket Center ===> 2 " />
        </div>
      </form>
    </div>
  </div>
  </div>

  );
}

export default Sta;
