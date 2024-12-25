import React, { useContext } from 'react'
import '../App.css';
import { AuthContext } from '../context/AuthContext';

function Login({ actLogin, userRef, isContextAPI }) { //State Lifting input arguments

  //contextAPI variables
  const { authLogIn, userNameRef } = useContext(AuthContext);

  return (
    <div className='login-container'>
      <h3 style={{ color: "#4098b5", textDecoration: "Underline" }}>User credentials</h3>
      <input ref={isContextAPI ? userNameRef : userRef} placeholder='Username' ></input>
      <button onClick={isContextAPI ? authLogIn : actLogin} className='login-btn'>Login</button>
    </div>
  )
}

export default Login