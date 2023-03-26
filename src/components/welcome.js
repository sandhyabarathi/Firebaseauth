import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword , onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth';
import  { auth } from "../firebase.js";
import {useNavigate} from "react-router-dom";


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
    if(registerInfo.email!==registerInfo.confirmEmail)
    {
      alert("Email doesn't match!!")
      return;
    } else if(registerInfo.password!==registerInfo.confirmPassword)
    {
      alert("Password doesn't match!!")
      return;
    }
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
        <input type="email" placeholder='Email'value={registerInfo.email} onChange={(e)=>setRegisterInfo({...registerInfo,email:e.target.value})}/>
        <input type="email" placeholder='Confirm Email' value={registerInfo.confirmEmail} onChange={(e)=>setRegisterInfo({...registerInfo,confirmEmail:e.target.value})}/>
        <input type="password" placeholder='Password' value={registerInfo.password} onChange={(e)=>setRegisterInfo({...registerInfo,password:e.target.value})}/>
        <input type="confirm-password" placeholder='Confirm Password' value={registerInfo.confirmPassword} onChange={(e)=>setRegisterInfo({...registerInfo,confirmPassword:e.target.value})}/>
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
