import React from 'react';
import Card from 'react-bootstrap/Card';
import Steps from './Steps';

function RecipeStage({numStage, nameStage, steps}) {
  return(
    <Card.Body className='stepDiv '>
      <h4 className='stageTitle'>Stage {numStage} {nameStage}</h4>
      <Steps stepText={steps}/>
    </Card.Body>
  )
}

export default RecipeStage; 
