import React from "react";
import Nav from 'react-bootstrap/Nav';

function LoginLinks() {
  return(
    <Nav>
      <Nav.Link href="/">Log out</Nav.Link>
      <Nav.Link href="/" className="border border-secondary bg-secondary rounded-circle fw-bold">NN</Nav.Link>
    </Nav>
  )
}

export default LoginLinks; 
