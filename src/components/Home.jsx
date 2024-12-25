import React from 'react'

function Home({setIsContextAPI,isContextAPI, userLogOut}){

  function onContextChange(){
    // isContextAPI ? 
    userLogOut();
    setIsContextAPI((prev)=>!prev)
  }
  
  return (
    <>
    <div className='toggle-container'>
      <input type="checkbox" onChange={onContextChange} defaultChecked={isContextAPI} /><label>Use Context API: {isContextAPI? "On": "Off"}</label>
    </div>
    <div className='home-info-container'>
      <h1>Welcome to the Auth System Demo - Now you are using {isContextAPI ? "ContextAPI approach" : "State Lifting approach"}</h1>
      <div>
        This Demo showcases two approaches to managing authentication state in React: <br/>
        <ul>
          <li>State Lifting</li>
          <li>Context API</li>
        </ul>
        Use the toggle above to switch between the two approaches
      </div>

    </div>

    </>
  )
}

export default Home