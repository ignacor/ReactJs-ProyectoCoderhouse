import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from './ItemDetail'
import CartContext from '../../Context/CartContex';
import { doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = ({ id }) => {
    const [item, setitem] = useState(null);
    const onAdd = (q) => {
        addItem(item, q)
    }
    const { addItem } = useContext(CartContext);
    useEffect( () => {
        const db = getFirestore();

        const itemRef = doc(db, "pokemones", id)

        getDoc(itemRef)
            .then( (snapshot) =>{
                console.log(snapshot.exists())
                if(snapshot.exists()) {
                    
                    setitem({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                }
            })
            .catch((err) => console.log(err))

    }, [])
    
    return (
        <>
        <div  >
            {
                item !== null &&
                <ItemDetail item={item} onAdd={onAdd} />

            }
            </div>
        </>
    )
}

export default ItemDetailContainer