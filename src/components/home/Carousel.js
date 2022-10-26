import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../custom.scss'; 


function CarouselHome({index, handleSelect}) {

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/salad.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='mb-4'>Choose the ingredients</h1>
            <hr />
            <h5>Cook with the ingredients you have in your kitchen</h5>            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/pasta.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className='mb-4'>Are you vegetarian/vegan?</h1>
            <hr />
            <h5>A lot of recipies without meat!</h5>            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/chilly.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className='mb-4'>Do you have a intolerance?</h1>
            <hr />
            <h5>Find the perfect recipies to feel good every dish</h5>            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
  );
}

export default CarouselHome; 