import React from "react";
import HoverCarousel from "hover-carousel";

const MyImageCarousel = () => {
  const images = [
    './src/imagenes/khea1.jpg',
    './src/imagenes/khea2.jpg',
    './src/imagenes/khea3.jpg',
    './src/imagenes/khea4.jpg',
  
  ];
  
  const h1Style ={
    color : '#d20c0c',
    textAlign :'center',
  }
  const container = {
 
  }
  return (
    <div style={container}>
      <HoverCarousel  images={images} />
    </div>
  );
};

export default MyImageCarousel;