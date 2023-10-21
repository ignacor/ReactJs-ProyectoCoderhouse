import React from "react";
import BichoContainer from "../componentes/PokemonsTipos/BichoContainer";
const TipoBicho = () =>{
    const dist  = {
        height :'83vh'
      }
    return(
        <div style={dist}>   
            <BichoContainer/>
        </div>
    )
};
export default TipoBicho