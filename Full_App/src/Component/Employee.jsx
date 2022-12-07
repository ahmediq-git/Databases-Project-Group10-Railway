import Button from 'react-bootstrap/Button';
import Card from './Card.js';
import './Booktick.css';
import train from './train4.jpg';
function Employee() {
  return (
    <>
    <div className="Cards">
    <Button className="Heading"> Admin Home Page</Button>
        <Card title="View Job"  para="Here Employee can view their assign Job" p={{ icon: train, name: "First" }} />
        <Card title="Book Ticket"  para="Here Employee can Book ticket for someone"/>
        <Card title="View schudles"  para="Here Employee can view schudles for trains"/>
        

        
    </div>
    </>
  );
}
export default Employee;