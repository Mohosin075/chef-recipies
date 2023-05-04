/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.confiq';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider =new GoogleAuthProvider(auth);

    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log("logged user inside auth state observer", loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser, 
        signIn,
        logOut,
        googleLogin,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;