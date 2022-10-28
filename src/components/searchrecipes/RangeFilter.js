import React from 'react';
// import Form from 'react-bootstrap/Form';
// import RangeSlider from 'react-bootstrap-range-slider';
// import Col from 'react-bootstrap/Col';
import MultiRangeSlider from "multi-range-slider-react";
import './multirangeslider.css';

function RangerFilter({value1, value2, onInput})  {
  return(
   
    <MultiRangeSlider
			min={50}
			max={1500}
			step={10}
			minValue={value1}
			maxValue={value2}
			onInput={onInput} 
      ruler={false} 
      minCaption={value1 +'KCal'}
      maxCaption={value2 +'KCal'}
		/>
  )
}

export default RangerFilter; 