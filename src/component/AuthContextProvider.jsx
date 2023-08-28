import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,} from "firebase/auth";
import { app } from '../firebase.config';


export const AuthContext = createContext(null)

const auth =getAuth(app)

const AuthContextProvider = ( {children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading ] = useState(true)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginUser = (email,password)=>{
        return  signInWithEmailAndPassword(auth,email,password)

    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(loggedInUser)=>{
            console.log("user",loggedInUser);
            setUser(loggedInUser)
            setLoading(false)
        })
        return()=>{
            return unsubscribe()
        }
    },[])
    const logoutUser = ()=>{
        return signOut(auth)

    }

    const authInfo ={
        user,
        createUser,
        loginUser,
        logoutUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthContextProvider;