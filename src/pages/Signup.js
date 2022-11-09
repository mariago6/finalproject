import React, {useState, useEffect} from "react";
import SignUpComponent from '../components/auth/SignUpComponent'; 
import {createUserWithEmailAndPassword, updateProfile, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase/config'; 
import Loader from '../components/auth/Loader/Loader';
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux'; 
import { SET_ACTIVE_USER, REMOVE_ACTIVA_USER } from '../redux/slice/authSlice';



function Signup() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [cPassword, setCPassword] = useState(''); 
  const [agree, setAgree] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    setIsLoading(true);

    if(!agree || password !== cPassword || username === '') {
      toast.error("ERROR with your registration");
      setIsLoading(false);
      return
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
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

  useEffect(() => {
    setIsLoading(true); 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: username,
          userId: user.uid,
        }))
        setIsLoading(false); 
      } else {
        dispatch(REMOVE_ACTIVA_USER()); 
        setIsLoading(false); 
      }
    })
  }, [dispatch, username])

  return(
    <div style={{ backgroundImage:`url(./images/fruit.jpg)` }} className="backgroundLoginSignup">
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