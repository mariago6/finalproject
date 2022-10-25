import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginLinks from '../auth/LoginLinks';
import LogoutLinks from '../auth/LogoutLinks'; 
import '../../custom.scss';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/config'; 
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';


const NavbarHeader = () => {
  const navigate = useNavigate(); 

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success('Log out successful'); 
      navigate("/"); 
    })
    .catch((error) => {
      toast.error(error.message)
    });
  }
  return(
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="/">Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="searchrecipes">Search</Nav.Link>
            <Nav.Link href="favorites">Favorites</Nav.Link>
          </Nav>
          <Nav>
            <LogoutLinks />
            <LoginLinks logoutUser={logoutUser}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader;