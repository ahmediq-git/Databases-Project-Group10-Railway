import Button from 'react-bootstrap/Button';
import Card from './Card.js';
import './Booktick.css';
import train from './train4.jpg';
function Booktick() {
  return (
    <>
    <div className="Cards">
    <Button className="Heading"> Admin Home Page</Button>
        <Card title="Add staff"  para="Here Admin Can Add / Modify the Employee information" p={{ icon: train, name: "First" }} />
        <Card title="Add Driver"  para="Here Admin Can Add / Modify the Driver information"/>
        <Card title="Add  Train"  para="Here Admin Can Add / Modify the Train information"/>
        <Card title="View statistics"  para="Here Admin Can View / Modify the Railway statistics"/>
        <Card title="View Station information"  para="Here Admin Can View / Modify the station information"/>
        <Card title="Add Cargo"  para="Here Admin Can Add / Modify the Cargo information"/>
        <Card title="Add duties"  para="Here Admin Can Add / Modify the staff duties" />
        <Card title="Add Rewards"  para="Here Admin Can Add / Modify rewards on tickets"/>
        <Card title="Add schudles"  para="Here Admin Can Add / Modify the Train timetable"/>
        

        
    </div>
    </>
  );
}
export default Booktick;