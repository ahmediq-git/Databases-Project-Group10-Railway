import './Phome.css';
import train from './train4.jpg'

function We() {
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
    <div className="title">How we can help you</div>
    <div className="content">
      <form action="#">

        <div className="button">
          <input type="submit"  value="Book a personal Ticket" />
        </div>
        
        <div className="button">
          <input type="submit"  value="Book a Ticket  for someone " />
        </div>

        <div className="button">
          <input type="submit"  value="Search Your Ticket" />
        </div>

        <div className="button">
          <input type="submit"  value="Track Your Cargo" />
        </div>

        <div className="button">
          <input type="submit"  value="Print Ticket" />
        </div>

        <div className="button">
          <input type="submit"  value="Check Ticket Status" />
        </div>

        <div className="button">
          <input type="submit"  value="Check Rewards" />
        </div>

        

      </form>
    </div>
  </div>
  </div>

  );
}

export default We;
