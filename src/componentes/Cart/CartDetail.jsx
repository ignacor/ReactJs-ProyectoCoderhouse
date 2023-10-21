import React, { useContext, useState } from 'react'
import CartContext from '../../Context/CartContex'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SweetAlert2 from 'react-sweetalert2';


const CartDetail = () => {
    const [swalProps, setSwalProps] = useState({})
    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear } = useContext(CartContext)
    const navigate = useNavigate()
    const addToCart = () => {
        const purchase = {
           
            items: cart,
            date: new Date(),
            total: 1000
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then(res => navigate(`/checkout/${res.id}`))
            .catch(err => console.log(err))
        
        clear()
        setSwalProps({
            show: true,
            title: 'PokemonShop!',
            text: 'Gracias pór comprar en tu tienda de Pokemones favorita,vamos a validar tu compra y enviar tu Pokemon a tu domicilio!',
            icon: 'success',
        });
        
    }
    const container = {
        display :'flex',
        margin :'10px',
      
    }
  
    const styleBtn2 = {
        width : '100%',
    }
   const styleErr = {
    textAlign : 'center',
    color :'red',

   }

    return (
        <div >
            <div style={container}>
                   <SweetAlert2 {...swalProps} />
            { 
                cart.map(el => (
                 
                    <div style={container} key={el.id}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={el.img} />
                    <Card.Body>
                      <Card.Title>Pokemon: {el.name}</Card.Title>
                      <Card.Text>
                       Cantidad: {el.quantity}
                      </Card.Text>
                      <Button onClick={() => removeItem(el.id)} variant="danger">Eliminar</Button>
                    </Card.Body>
                  </Card>
                  </div>
                ))

            }
            </div>
            {
                cart.length <= 0 &&
                <h1 style={styleErr}>No hay productos en tu Carrito!</h1>
            }
           
            {
                cart.length > 0 &&
                <button style={styleBtn2} className='btn btn-dark' onClick={addToCart}>Create order</button>
            }
            {
                orderId && <span>Oreder created: {orderId}</span>
            }
        
    </div>
    )
}

export default CartDetail