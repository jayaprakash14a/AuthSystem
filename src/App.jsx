import { useContext, useRef, useState } from "react";
import Login from "./components/Login";
import AppBar from "./components/AppBar";
import './App.css';
import { AuthContext } from "./context/AuthContext";

function App() {
  //the only state variables used for both State Lifting and contextAPI approaches
  //will be State Lifting this variable since thats the basic functionality.
  const [isContextAPI, setIsContextAPI] = useState(true);

  //State Lifting variables
  const [userName, setUserName] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const userRef = useRef();

  //contextAPI variables
  const { isLoggedIn } = useContext(AuthContext);

  //derived variables from 2 approaches.
  const lgnStatus = isContextAPI ? isLoggedIn : loginStatus;

  //State Lifting functions start
  function actLogin() {
    if (userRef.current.value === "jaya") {
      setUserName(userRef.current.value);
      setLoginStatus(true);
    }
  }

  function logOut() {
    setLoginStatus(false);
  }
  //State Lifting functions end;

  return (<>

    <AppBar
      userName={userName}
      loginStatus={loginStatus}
      logOut={logOut}
      setIsContextAPI={setIsContextAPI}
      isContextAPI={isContextAPI}
    ></AppBar>

    {!lgnStatus && <Login actLogin={actLogin} userRef={userRef} isContextAPI={isContextAPI}></Login>}


  </>);
}

export default App
