import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Counter = ({onAdd}) => {
    const [count] = useState(1)

   
  return (
    <div>
        <Button onClick={() => onAdd(count) } variant="danger">Agregar al carrito</Button>
    </div>
  )
}

export default Counter