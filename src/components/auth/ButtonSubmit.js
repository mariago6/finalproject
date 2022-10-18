import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../custom.scss';

function ButtonSubmit({type, textbutton, onClick}) {
  return(
    <Button type={type} onClick={onClick} className="px-5">{textbutton}</Button>
  )
}

export default ButtonSubmit; 
