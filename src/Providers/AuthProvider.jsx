/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
    GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";
// create context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create User With Email And Password

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  // sing in user for email and password

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // providers
  const googleProvider = new GoogleAuthProvider(auth);
  const githubProvider = new GithubAuthProvider(auth)

  // google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github  login
  const githubLogin =()=>{
    return signInWithPopup(auth, githubProvider);
  }

  const forgetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email)
  }
  
  // on auth change handle
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // update user data 
  const updateUseData = (name , url) => {
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: url
    })
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    signIn,
    forgetPassword,
    logOut,
    googleLogin,
    githubLogin,
    loading,
    updateUseData
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
