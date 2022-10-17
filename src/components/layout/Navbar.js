import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginLinks from './LoginLinks';
import LogoutLinks from './LogoutLinks'
import '../../custom.scss';

const NavbarHeader = () => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="/">Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="searchrecipes">Search recipes</Nav.Link>
          </Nav>
          <Nav>
            <LogoutLinks />
            <LoginLinks />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader;