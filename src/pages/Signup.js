import React, {useState} from "react";
import SignUpComponent from '../components/auth/SignUpComponent'; 
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../firebase/config'; 
import Loader from '../components/auth/Loader';
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function Signup() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [cPassword, setCPassword] = useState(''); 
  const [agree, setAgree] = useState(false); 
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

    if(!agree || password !== cPassword || username === '') {
      toast.error("ERROR with your registration");
      setIsLoading(false);
      return
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: username
        })
        setIsLoading(false); 
        toast.success("Sign up successful");
        navigate("/searchrecipes")
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false); 
      });
  };

  return(
    <div>
      {isLoading && <Loader />}
      <SignUpComponent 
        validated={validated} 
        handleSubmit={handleSubmit} 
        handleChangeUsername={(e) => setUsername(e.target.value)}
        handleChangeEmail={(e) => setEmail(e.target.value)} 
        handleChangePassword={(e) => setPassword(e.target.value)}
        handleChangeCPassword={(e) => setCPassword(e.target.value)}
        onChangeCheckBox={() => setAgree(!agree)}
        email={email}
        password={password} 
        cpassword={cPassword}
        username={username}
        />
      </div>
  )
}

export default Signup; 