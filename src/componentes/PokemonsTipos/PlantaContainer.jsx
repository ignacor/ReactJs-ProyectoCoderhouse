import React, {useState, useEffect, useContext} from "react";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ItemList from "../items/ItemList";
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const PlantaContainer = () =>{
const [items, setItems] = useState([])


useEffect( () => {
    const db = getFirestore();

    const pokemonCollection = collection( db, "pokemones")

    const tipoPlanta = query(pokemonCollection, where("tipo", "==", "Planta"))
   getDocs(tipoPlanta)
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
export default PlantaContainer