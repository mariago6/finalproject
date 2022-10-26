import React from 'react';
import {BsLinkedin, BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

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
            <p><small>@{year} All Rights Reserved</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer; 