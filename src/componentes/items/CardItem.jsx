import { CardImg } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardItem = ({ item }) => {
  const container = {
    border:' 2px solid black',
    borderRadius:' 25px',
    width: '18rem'
  }
  const containercard = {
   backgroundColor :'#B5B5B5',
   border:' 2px solid #B5B5B5',
    borderRadius:' 25px',
  }
    return (
      
        <Card style={container} className='mx-2 mt-4'>
        <Card.Img variant="top" style={containercard} src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
           Tipo: {item.tipo}
          </Card.Text>
          <Link to={`/detalle/${item.id}`}>
          <Button variant="danger">Ver Detalles</Button>
          </Link>
        </Card.Body>
      </Card>
        
    );
}

export default CardItem