import React, {useState} from "react";
import SignUpComponent from '../components/auth/SignUpComponent'



function Signup() {
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
    <SignUpComponent validated={validated} handleSubmit={handleSubmit} />
  )
}

export default Signup; 