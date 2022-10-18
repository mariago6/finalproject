import React, {useState} from "react";
import LoginComponent from "../components/auth/LoginComponent";


function Login() {
  const [validated, setValidated] = useState(false);
  const [currentUser, setCurrentUser] = useState({email: '', password: ''});


  function handleChange(event) {
    const {name, value} = event.target;
    setCurrentUser( ({
      ...currentUser,
      [name]: value
    })
    ); 
  }; 
  
  console.log(currentUser);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return(
    <LoginComponent validated={validated} handleSubmit={handleSubmit} handleChange={handleChange} email={currentUser.email} password={currentUser.password} />
  )
}

export default Login; 