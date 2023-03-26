import React, {useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import { Navigate, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      if(!user){
        navigate('/');
      }
    })
  },[])

  const handleSignOut = () => {
    signOut(auth).then(()=>{
      navigate('/');
    }).catch(err => {alert(err.message)});

  }
  return (
    <div>
      <h1>test</h1>
      <button onClick={handleSignOut}>SIGN OUT</button>
    </div>
  )
}
