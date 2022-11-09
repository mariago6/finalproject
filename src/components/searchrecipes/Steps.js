import React from 'react';
import Card from 'react-bootstrap/Card';

function Steps({stepText}) {
  return(
    <Card.Text className='stepText'>{stepText}</Card.Text>
  )
}

export default Steps; 