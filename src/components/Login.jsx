import React from 'react'
import '../App.css';

const Login = ({userName, loginStatus, actLogin, userRef}) => {
  
  return (
    <div className='login-container'>
      <h3 style={{color:"#4098b5", textDecoration:"Underline"}}>User credentials</h3>
      <input ref={userRef} placeholder='Username' ></input>
      <button onClick={actLogin} className='login-btn'>Login</button>
    </div>
  )
}

export default Login