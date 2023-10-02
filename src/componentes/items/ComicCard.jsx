import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ComicCard = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }}className='mx-2 mt-4' >
            <Card.Img variant="top" src={item.image}  style={{ height: '30%' }} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
               
                <Link to={`/detalle/${item.id}`}>
                 <Button className='btn-dark' variant="primary">Ver detalles</Button>
                </Link>

            </Card.Body>
        </Card>
        
    );
}

export default ComicCard 