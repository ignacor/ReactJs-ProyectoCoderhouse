import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ElectronicaCard = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }}className='mx-2 mt-4' >
            <Card.Img variant="top" src={item.image}  style={{ height: '30%' }} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
           
                 <Button variant="primary">Ver detalles</Button>

            </Card.Body>
        </Card>
        
    );
}

export default ElectronicaCard 