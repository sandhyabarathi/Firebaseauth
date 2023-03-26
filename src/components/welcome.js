import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword , onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth';
import  { auth } from "../firebase.js";
import {useNavigate} from "react-router-dom";
import e from 'express';

export default function Welcome() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInfo , setRegisterInfo] = useState({
    email: " ",
    confirmEmail: " ",
    password: " ",
    confirmPassword:" "
  });



  const navigate = useNavigate();


  useEffect(()=> {
    auth.onAuthStateChanged((user)=>{
      if(user){
        navigate("/homepage");
      }
    })

  },[])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }


  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate('/homepage')

    }).catch((err)=> alert(err.message));


  }

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password).then(()=>{
      navigate('/homepage')
    }).catch((err)=> alert(err.message));

  }


  
  return (
    <div className='welcome'>
       <h1>Todo list</h1> 
       <div className='login-register-container'>
        {
          isRegistering ? (
            <>
        <input type="email" placeholder='Email' value={registerInfo.email} />
        <input type="email" placeholder='Confirm Email' value={registerInfo.confirmEmail}/>
        <input type="password" placeholder='password' value={registerInfo.password}/>
        <input type="confirm-password" placeholder='Confirm Password' value={registerInfo.confirmPassword}/>
        <button onClick={handleRegister}>REGISTER</button>
        <button onClick={() => setIsRegistering(false)}>GO BACK</button>

            </>
          ):(
            <>
        <input type="email" onChange={handleEmailChange} value={email}/>
        <input type="password" onChange={handlePasswordChange} value={password}/>
        <button onClick={handleSignIn}>SIGN IN</button>
        <button onClick={() => setIsRegistering(true)}>Create an account</button>

          </>
          )
        }  
       </div>
    </div>
  )
}
