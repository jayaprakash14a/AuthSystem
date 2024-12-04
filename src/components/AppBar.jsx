import React from 'react'

const AppBar = ({userName, loginStatus, logOut}) => {
   
  return (
    <div className='app-bar'>
      <h1>Auth System Demo</h1>
      {loginStatus && <div className='user-details'>Welcome, {userName}!<button onClick={logOut} className='logout-btn'>Logout</button></div>}
    </div>
  )
}

export default AppBar