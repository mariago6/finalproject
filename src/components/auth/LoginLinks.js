import React from "react";
import Nav from 'react-bootstrap/Nav';
import {BsPersonCircle} from 'react-icons/bs';

function LoginLinks({logoutUser, displayName}) {
  return(
    <Nav>
      <Nav.Link href='/' className=' text-dark'>
        <BsPersonCircle size={20}  className="mx-2"/>
        Hi, {displayName}
      </Nav.Link>
      <Nav.Link to="/" onClick={logoutUser}>Log out</Nav.Link>
    </Nav>
  )
}

export default LoginLinks; 
