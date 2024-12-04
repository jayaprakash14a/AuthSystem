import React, { useRef } from 'react'

const AuthSystem = () => {
  const usernameRef = useRef();
  function ACTLogin(){
    
  }
  return (
    <>
      <div>Auth System</div>
      <div>
        Username : <input name='username' ref={usernameRef}  />
      </div>
      <button onClick={ACTLogin}>Login</button>
      
    </>
    
  )
}

export default AuthSystem