import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';

function VerticalExample() {
  return (
    <Stack fluid-flow gap={3} style = {{ background: 'black',height: '100%', position: 'relative' }}>
      <div className="bg-pink border" style = {{ width: '40%', height: '10%', marginLeft: '20%', marginTop: '10%' , backgroundColor: "pink"}}>First item</div>
      <div className="bg-light border" style = {{ width: '40%', height: '10%', marginLeft: '20%',backgroundColor: "pink"}}>Second item</div>
      <div className="bg-light border"style = {{ width: '40%', height: '10%', marginLeft: '20%', backgroundColor: "pink"}}>Third item</div>
    </Stack>
  );
}

export default VerticalExample;