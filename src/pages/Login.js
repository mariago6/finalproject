import React, {useState} from "react";
import LoginComponent from "../components/layout/LoginComponent";


function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return(
    <LoginComponent validated={validated} handleSubmit={handleSubmit} />
  )
}

export default Login; 