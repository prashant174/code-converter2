import React, { createContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode'

const AuthContext=createContext()

const AuthProvider=({children})=>{
    const [user, setUser]=useState(null)

    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token){
            const decoded=jwtDecode(token)
            setUser(decoded)
        }
    },[])

    const login=(userData)=>{
        localStorage.setItem('token',userData.token)
        const decoded=jwtDecode(userData.token)
        setUser(decoded)
    }

    const logout=()=>{
        localStorage.removeItem('token')
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider,AuthContext}