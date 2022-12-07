import './Phome.css';
import train from './train4.jpg'
import {Link} from 'react-router-dom';

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
        
          <Link to='/Admin_t'>
            <input type="submit"  value="Book a personal Ticket" />
          </Link>
        </div>
        
        <div className="button">
          <Link to = '/Admin_t'>
          <input type="submit"  value="Book a Ticket  for someone " />
          </Link>
        </div>

        <div className="button">
          <Link to = '/Search_T'>
          <input type="submit"  value="Search Your Ticket" />
          </Link>
        </div>

        <div className="button">
          <Link to = '/Cargo'>
          <input type="submit"  value="Track Your Cargo" />
          </Link>
        </div>

        <div className="button">
          <Link to = '/Stinf'>
          <input type="submit"  value="Print Ticket" />
          </Link>
        </div>

        <div className="button">
          <Link to = '/Status'>
          <input type="submit"  value="Check Ticket Status" />
          </Link>
        </div>

        <div className="button">
          <Link to = '/Reward'>
          <input type="submit"  value="Check Rewards" />
          </Link>
        </div>
        <div className="button">
          <Link to = '/Stinf'>
          <input type="submit"  value="Check Station Information" />
          </Link>
        </div>

        

      </form>
    </div>
  </div>
  </div>

  );
}

export default We;
