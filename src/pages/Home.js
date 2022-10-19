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
    </div>
  )
}

export default Home; 