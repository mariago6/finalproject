import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../custom.scss'; 


function CarouselHome({index, handleSelect}) {

  return (
      <Carousel variant="light" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/salad.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='containerCarousel py-3'>
            <h2>Choose the ingredients</h2>
            <p>Cook with the ingredients you have in your kitchen</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/pasta.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='containerCarousel py-3'>
            <h2>Are you vegetarian?</h2>
            <p>A lot of recipes without meat!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/chilly.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className='containerCarousel py-3'>
            <h2>Do you have any intolerance?</h2>
            <p> Find the best recipe to feel good at all meals </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  );
}

export default CarouselHome; 