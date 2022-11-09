import React, {useState} from "react";
import '../custom.scss';
import CarouselHome from "../components/home/Carousel";


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return(
    <div>
      <CarouselHome index={index} handleSelect={handleSelect}/>
      <div className="container text-center">
        <div className="row">
          <h3 className="homeTitle mt-5 mb-4">Do you need more varied cooking ideas?</h3>
        </div>
        <div className="row">
          <h5 className="mb-4">🥑🧅🍞🍆🍗🍎🥦🥕🧀🍉🍚🥩🥚🍅🥒🍝🍫🫑🫐</h5>
        </div>
        <div className="row justify-content-center">
          <h5 className="mb-5 col-8" >Migga has been created to help people to cook more easily. 
          We are discovering more and more allergies and intolerances, so with Migga you will be able to find the most suitable recipe for you. Don't hesitate any longer, sign up and start cooking!</h5>
        </div>
      </div>
    </div>
  )
}

export default Home; 