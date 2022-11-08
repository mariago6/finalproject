import React from 'react';
import Card from 'react-bootstrap/Card';
import Steps from './Steps';

function RecipeStage({numStage, nameStage, steps}) {
  return(
    <Card.Body>
      <p>Stage {numStage} {nameStage}</p>
      <Steps stepText={steps}/>
    </Card.Body>
  )
}

export default RecipeStage; 