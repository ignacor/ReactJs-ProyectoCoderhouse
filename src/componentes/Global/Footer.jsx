import Stack from 'react-bootstrap/Stack';
import React from 'react'
import { SiInstagram } from "react-icons/si";
import { SiTwitter} from "react-icons/si";
import { SiFacebook} from "react-icons/si";

const  Footer = () => {

  const fondo = {
    backgroundColor :'#9B9B9B',
    border:' 2px solid black',
    borderRadius:' 25px',
  }
  const imgStyle = {
    width :'5%',
    height :'5%',
  }
  const copy = {
      textAlign :'center',
      color : 'black'
  }
  const color = {
    color : 'black',
    textDecoretion :'none',
}
const redes = {
  fontSize :'30px',
  color : 'black',
    textDecoretion :'none',

}

  return (
    <footer style={fondo}>
    <Stack direction="horizontal" gap={3}>
      <img style={imgStyle}  src="./src/imagenes/Poké_Ball_icon.svg.png" alt="" />
      <div ><h1 style={color}>Pokemon Shop!</h1></div>
      <div  className="p-2 ms-auto">
        <a  style={redes}  href="https://www.instagram.com/ ">< SiInstagram/> </a>
      </div>
      <div className="p-2">
       <a  style={redes} href="https://twitter.com/"> <SiTwitter/></a>
      </div>
      <div className="p-2">
       <a style={redes} href=""> <SiFacebook/> </a>
        </div>
    </Stack>
    <Stack gap={3}>
      <div style={copy} >Todos los derechos reservados ©2023</div>
    </Stack>
    </footer>
  );
}

export default Footer;