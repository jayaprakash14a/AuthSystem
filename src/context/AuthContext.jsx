import React, { createContext, useRef, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userNameRef = useRef();
    const authLogIn = ()=>{
        setIsLoggedIn(true);
    }

    const authLogOut = ()=>{
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, authLogIn, authLogOut, userNameRef}}>
            {children}
        </AuthContext.Provider>
    )
}

