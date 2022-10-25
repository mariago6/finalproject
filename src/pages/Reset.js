import React, { useState }  from "react";
import ResetComponent from "../components/auth/ResetComponent";
import Loader from '../components/auth/Loader';
import {useNavigate} from 'react-router-dom';
import {auth} from '../firebase/config'; 
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

function Reset() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email to reset your password");
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  


  return(
    <div>
      {isLoading && <Loader />}
      <ResetComponent 
        validated={validated} 
        handleSubmit={handleSubmit} 
        handleChangeEmail={(e) => setEmail(e.target.value)} 
        email={email} 
      />
    </div>
  )
}

export default Reset; 