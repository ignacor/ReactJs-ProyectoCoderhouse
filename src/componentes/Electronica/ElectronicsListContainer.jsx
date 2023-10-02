import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ElectronicaList from './ElectronicsList';
import useFetch from '../../hooks/useFetch';

const ElectronicaListContainer = ( { id } ) => {
    const [items] = useFetch(`https://fakestoreapi.com/products/category/electronics`)
 
    return (
        <Container>
            <Row>
                {
                    items !== null &&
                    <ElectronicaList items={items} />
                }
            </Row>
        </Container>
    )
}

export default ElectronicaListContainer