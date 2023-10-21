import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({ item, onAdd}) => {
const container ={
    display : 'flex',
    justifyContent : 'center',
    alignItemns: 'center',  
    paddingTop: '100px'
    
}
const contImg = {
    backgroundColor: '#B5B5B5',
    border:' 2px solid black',
    borderRadius:' 25px',
    marginRight :'25px'
}
const contDescp = {
    backgroundColor: 'white',
    border:' 2px solid black',
    borderRadius:' 25px',
}
const nameStyle = {
    textAlign:'center',
    color :'#cb3234'
}
    return (
    <div style={container} >
            <div style={contImg}>
                <img src={item.img} alt="pokemon img" />
            </div>

        <div style={contDescp}> 
            <h1 style={nameStyle}>{item.name}</h1>
            <h2>${item.price}</h2>
            <p>{item.description} </p>
            <h4>Tipo: {item.tipo}</h4>
          <Counter variant ='bot' onAdd={onAdd} />
        </div>

    </div>
    )
}

export default ItemDetail