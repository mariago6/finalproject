import React, {useState} from "react";
import SignUpComponent from '../components/auth/SignUpComponent'



function Signup() {
  const [validated, setValidated] = useState(false);
  const [newUser, setNewUser] = useState({firstName: '', surname1: '', surname2: '', email: '', password: '', confirmPassword: ''});


  function handleChange(event) {
    const {name, value} = event.target;
    setNewUser( ({
      ...newUser,
      [name]: value
    })
    ); 
  }; 

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return(
    <SignUpComponent 
      validated={validated} 
      handleSubmit={handleSubmit} 
      handleChange={handleChange} 
      firstName={newUser.firstName} 
      surname1={newUser.surname1} 
      surname2={newUser.surname2} 
      email={newUser.email}
      password={newUser.password} 
      confirmPassword={newUser.confirmPassword}
      />
  )
}

export default Signup; 