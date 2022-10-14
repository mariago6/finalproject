import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../custom.scss'; 


function CarouselHome({index, handleSelect}) {

  return (
    
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/salad.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/pasta.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/chilly.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  
  );
}

export default CarouselHome; 