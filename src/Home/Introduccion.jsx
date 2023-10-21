import React from "react";
import Stack from 'react-bootstrap/Stack';

const IntroduccionHome = () => {
   
    const contStyle = {
        display: 'flex',
        border:' 2px solid black',
        borderRadius:' 25px',
    } 

    const h1Style = {
        color: 'black',
    }
    const h4Style = {
        color: 'black',
    }
    
    const imgStyle = {
        width: '100%',
        height: '100%'
    }
 
    const divRojo = {
        width: '70px',
        height: '106vh',
        backgroundColor : 'red',
        color :'red',
    }
    const divnegro = {
        width: '70px',
        height: '106vh',
        backgroundColor : 'black'
    }

  return (


    <Stack style={contStyle} direction="horizontal" gap={3}>
      <div className="p-2"> <h1 style={h1Style}>Compra tu Pokemon preferido desde cualquier parte del mundo! </h1>
     <h4 style={h4Style}>La mejor seleccion de Pokemons de toda la galaxia,con envios a cualquier parte del mundo </h4></div>
     <div style={divRojo}>.</div>
     <div  style={divnegro}>.</div>
      <div className="p-2 ms-auto "><img src="https://dcassetcdn.com/design_img/3810593/741410/23472778/rj3pcb2rkbv0cby5ewr7eck7h6_image.png" alt="pokemon"style={imgStyle} /></div>
     
    </Stack>
  );
};

export default IntroduccionHome;