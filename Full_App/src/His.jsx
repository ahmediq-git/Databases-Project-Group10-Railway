import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './His.css'
function His() {
  return (
    <div className="all">
            <div className="bt">
                <Button> Date</Button>
                <Button> From</Button>
                <Button> To</Button>
                <Button> Fair</Button>
            </div>
            <div className="bte">
                <Button className = "con" > 
                        <p > 20/09/2022  </p>
                        <p > 20/09/2022  </p>
                        <p > 20/09/2022  </p>
                </Button>
                <Button className = "con"> 
                        <p > 20/09/2022  </p>
                </Button>
                <Button className = "con"> 
                        <p > 20/09/2022  </p>
                </Button>
                <Button className = "con"> 
                        <p > 20/09/2022  </p>
                </Button>
                
            </div>
    </div>
            
      
      
    
  );
}

export default His;