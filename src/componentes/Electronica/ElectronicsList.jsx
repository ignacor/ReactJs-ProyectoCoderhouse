import React from 'react'
import { Col } from 'react-bootstrap';

import ElectronicaCard from './ElectronicsCard';
const ElectronicaList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <Col md={4} lg={4} sm={12} key={item.id} >
                        <ElectronicaCard item={item} />
                    </Col>
                ))
            }
        </>
    )
}

export default ElectronicaList