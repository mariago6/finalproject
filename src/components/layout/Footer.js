import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsLinkedin, BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';

function Footer() {
  return(
    <div className='footer bg-primary text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <a href='https://www.linkedin.com/in/mariagonzalezcarreno/' className='text-dark'><BsLinkedin className='mx-2 my-4' /></a>
            <BsFacebook className='m-2 my-4'/>
            <BsInstagram className='m-2 my-4'/>
            <BsTwitter className='m-2 my-4'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <p><small>@2022 copyright</small></p>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
    //   {/* {isLoading && <Loader />} */}
    //     <Container>
    //       {/* <Navbar.Brand href="/">Recipes</Navbar.Brand> */}
    //       <Navbar.Toggle  />
    //       <Navbar.Collapse id="responsive-navbar-nav" >
    //         <Nav className="m-auto justify-content-center col-5" >
    //           <BsLinkedin className='m-2'/>
    //           <BsFacebook className='m-2'/>
    //           <BsInstagram className='m-2'/>
    //           <BsTwitter className='m-2'/>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    //   <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
    //   {/* {isLoading && <Loader />} */}
    //     <Container>
    //       {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
    //       <Navbar.Collapse id="responsive-navbar-nav" >
    //         <Nav className="m-auto justify-content-center" > 
    //           <p className='col-5 text-center'>kdfgldfgdlgmdlk mgjkdlfmglkdfm gklfdkgldfglfd lgkjfgkdj flkgfdl gmflgdmflklkg lgmldgmdfgmd klbvbc vbf hfgh fgh ghgjg hg bnbnv vbnvnv bnvbn vbn bnbn bnbf dhbm lvll</p>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </div>
  )
}

export default Footer; 