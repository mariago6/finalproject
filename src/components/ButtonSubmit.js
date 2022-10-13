import React from 'react';
import Button from 'react-bootstrap/Button';
import '../custom.scss';

function ButtonSubmit({type, textbutton}) {
  return(
    <Button type={type} className="px-4">{textbutton}</Button>
  )
}

export default ButtonSubmit; 
