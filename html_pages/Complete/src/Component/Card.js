import './Booktick.css';
import Button from 'react-bootstrap/Button';
// import train from './train4.jpg';

function Cards(props) {
  return (
    <div className="card">
          <img className="im" src={props.imageSource} style = {{width: '200px'} }></img>
          
          <h1 className = "head">{props.title}</h1>
          <p className = "par">{props.para}</p>
                
                 <Button  className="bt"   >Add</Button>
                 <Button  className="bt"   >Modify </Button>
                 
        
    </div>
  );
}

export default Cards;
