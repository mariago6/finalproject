import React, { useState }  from "react";
import ResetComponent from "../components/auth/ResetComponent";

function Reset() {
  const [validated, setValidated] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  function handleChange(event) {
    const {name, value} = event.target;
    setNewPassword( ({
      ...newPassword,
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

  console.log(newPassword);

  return(
    <ResetComponent validated={validated} handleSubmit={handleSubmit} handleChange={handleChange} newpassword={newPassword} />
  )
}

export default Reset; 