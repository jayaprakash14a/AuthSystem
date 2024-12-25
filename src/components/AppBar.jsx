import React, { useContext } from 'react'
import Home from './Home'
import { AuthContext } from '../context/AuthContext';

const AppBar = ({userName, loginStatus, logOut, setIsContextAPI, isContextAPI}) => { //State Lifting input arguments

  //contextAPI variables
  const {isLoggedIn, authLogOut , userNameRef} = useContext(AuthContext);

  //derived attributes from both approches
  const usernm = isContextAPI ? (userNameRef.current !=undefined ? userNameRef.current.value : "") : userName;
  const lgnStatus = isContextAPI ? isLoggedIn :  loginStatus;

  function userLogOut(){
    if(isContextAPI){
      authLogOut();
    }else{
      logOut();
    }
  }

  return (
    <>
      <div className='app-bar'>
        <h1>Auth System Demo</h1>
        {lgnStatus && <div className='user-details'>Welcome, {usernm}!<button onClick={userLogOut} className='logout-btn'>Logout</button></div>}
      </div>
      {lgnStatus && <Home isContextAPI={isContextAPI} setIsContextAPI={setIsContextAPI} userLogOut={userLogOut} ></Home>}
    </>
  )
}

export default AppBar