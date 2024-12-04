import { useContext, useRef, useState } from "react";
import AuthSystem from "./components/AuthSystem";
import Login from "./components/Login";
import AppBar from "./components/AppBar";
import './App.css';

function App() {
  //const authContext = useContext();
  const [userName, setUserName] = useState("");
  const [loginStatus, setLoginStatus] =  useState(false);
  const userRef = useRef();
  function actLogin (){
    setUserName(userRef.current.value);
    if(userName === "Jaya"){
      setLoginStatus(true);
    }
  }
  
  function logOut(){
    setLoginStatus(false);
  }

  return <>
    
    <AppBar userName={userName} loginStatus={loginStatus} logOut={logOut} > </AppBar>

    {!loginStatus && <Login actLogin={actLogin} userName= {userName} loginStatus={loginStatus} userRef={userRef}></Login>}
  </>;
}

export default App
