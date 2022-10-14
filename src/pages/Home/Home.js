import React, {useState} from "react";
import '../../custom.scss';
import CarouselHome from "../../components/Carousel";


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return(
    <CarouselHome index={index} handleSelect={handleSelect}/>
  )
}

export default Home; 