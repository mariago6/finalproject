import React from "react";
import Nav from 'react-bootstrap/Nav';


function LogoutLinks() {
  return(
    <Nav>
      <Nav.Link href="login">Log in</Nav.Link>
      <Nav.Link href="signup">Sign up</Nav.Link>
    </Nav>
  )
}

export default LogoutLinks; 