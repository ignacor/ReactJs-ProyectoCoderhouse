import React from 'react'
import { useParams } from 'react-router'
import ItemDetailContainer from '../componentes/details/ItemDetailContainer'

const Detail = () => {
    const { id } = useParams()
    const container = {
      backgroundColor : '#E0E0E0',
      height: '82vh',
      width: '100%',

  }
  return (
    <div style={container}>
      <ItemDetailContainer id={id}/>
    </div>
  )
}

export default Detail