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
import {useDispatch} from 'react-redux'; 
import { SET_ACTIVE_USER, REMOVE_ACTIVA_USER } from '../../redux/slice/authSlice';
import {ShowOnLogin, ShowOnLogout} from '../auth/HiddenLink';


const NavbarHeader = () => {
  const [displayName, setDisplayName] = useState(''); 
  const navigate = useNavigate(); 

  const dispatch = useDispatch(); 

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success('Log out successful'); 
      navigate("/"); 
    })
    .catch((error) => {
      toast.error(error.message)
    });
  }

  //current login user

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        const uName = user.displayName;
        const username = uName.charAt(0).toUpperCase() + uName.slice(1);  
        setDisplayName(username); 

        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: username,
          userId: user.uid,
        }))
      } else {
        setDisplayName(''); 
        dispatch(REMOVE_ACTIVA_USER()); 
      }
    })
  }, [dispatch, displayName])

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
            <ShowOnLogout>
              <LogoutLinks />
            </ShowOnLogout>
            <ShowOnLogin>
              <LoginLinks logoutUser={logoutUser} displayName={displayName}/>
            </ShowOnLogin>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader;