import React, {useEffect, useState} from 'react'
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
import { onAuthStateChanged } from "firebase/auth";


const NavbarHeader = () => {
  const [displayName, setDisplayName] = useState(''); 
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

  //current login user. REVIEW  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const userName = user.email.slice(0, 6)
        setDisplayName(userName); 
      } else {
        setDisplayName(''); 
      }
    })
  }, [displayName])

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
            <LogoutLinks displayName={displayName}/>
            <LoginLinks logoutUser={logoutUser}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader;