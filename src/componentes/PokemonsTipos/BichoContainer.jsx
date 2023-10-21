import React, {useState, useEffect, useContext} from "react";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ItemList from "../items/ItemList";
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const BichoContainer = () =>{
const [items, setItems] = useState([])


useEffect( () => {
    const db = getFirestore();

    const pokemonCollection = collection( db, "pokemones")

    const tipobicho = query(pokemonCollection, where("tipo", "==", "Bicho"))
   getDocs(tipobicho)
        .then(snapshot => {
          const alldata =  snapshot.docs.map(document => ({id: document.id, ...document.data()}))
           setItems(alldata)
        })
    

}, [])



    return(
        <Container>
        
        <Row>
            {
                items.length > 0 &&
                <ItemList items={items} />
            }
        </Row>
    </Container>
    )
}
export default BichoContainer