import React from 'react'
import { useParams } from 'react-router-dom';
import ElectronicaListContainer from '../componentes/Electronica/ElectronicsListContainer';
const Electronica = () =>{
  const {category} = useParams()
        
    return(
        <div>
                <ElectronicaListContainer category={category}/>

      </div>
    )
};
export default Electronica