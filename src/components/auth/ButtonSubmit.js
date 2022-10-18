import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../custom.scss';

function ButtonSubmit({type, textbutton, onClick}) {
  return(
    <Button type={type} className="px-4" onClick={onClick}>{textbutton}</Button>
  )
}

export default ButtonSubmit; 
