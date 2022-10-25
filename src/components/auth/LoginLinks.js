import React from "react";
import Nav from 'react-bootstrap/Nav';

function LoginLinks({logoutUser}) {
  return(
    <Nav>
      <Nav.Link to="/" onClick={logoutUser}>Log out</Nav.Link>
    </Nav>
  )
}

export default LoginLinks; 
