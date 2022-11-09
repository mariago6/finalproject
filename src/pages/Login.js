import React, {useState} from "react";
import LoginComponent from "../components/auth/LoginComponent";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/config'; 
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/auth/Loader/Loader'; 
import {useNavigate} from 'react-router-dom';

function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
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
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoading(false); 
        toast.success("Log in successful");
        navigate("/searchrecipes");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return(
    <div style={{ backgroundImage:`url(./images/fruit.jpg)` }} className="backgroundLoginSignup">
      {isLoading && <Loader />}
      <LoginComponent 
        validated={validated} 
        handleSubmit={handleSubmit}
        handleChangeEmail={(e) => setEmail(e.target.value)} 
        handleChangePassword={(e) => setPassword(e.target.value)} 
        email={email} 
        password={password} 
      />
    </div>
  )
}

export default Login; 