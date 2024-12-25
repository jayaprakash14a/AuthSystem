import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const AuthSystem = () => {
  const {userNameRef} = useContext(AuthContext);

  function ACTLogin(){
    if(userNameRef.current.value === 'jaya'){
      login();
    }
    
  }
  return (
    <>
      <div>Auth System</div>
      <div>
        Username : <input name='username' ref={userNameRef}  />
      </div>
      <button onClick={ACTLogin}>Login</button>
    </>
    
  )
}

export default AuthSystem