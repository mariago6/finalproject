import React from "react";
import Nav from 'react-bootstrap/Nav';
import {BsPersonCircle} from 'react-icons/bs';

function LogoutLinks({displayName}) {
  return(
    <Nav>
      <Nav.Link href='/' className=' text-dark'>
        <BsPersonCircle size={20}  className="mx-2"/>
        Hi, {displayName}
      </Nav.Link>
      <Nav.Link href="login">Log in</Nav.Link>
      <Nav.Link href="signup">Sign up</Nav.Link>
    </Nav>
  )
}

export default LogoutLinks; 