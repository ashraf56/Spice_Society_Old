import React, { createContext, useEffect, useState } from 'react';
import App from '../../App';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.config';

export let Authcontext=createContext(null);
const auth = getAuth(app);
const Gprovider = new GoogleAuthProvider();


const AuthCenter = ({children}) => {

    let [user,setUser]=useState(null);
    let [loader,setLoader]=useState(true);

let createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password);
}

let signin=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}

let google=()=>{
  
    return signInWithPopup(auth, Gprovider)
}

useEffect(()=>{
    let unsubscribe=onAuthStateChanged(auth,cuser=>{
        setUser(cuser);
       
        
    })
    return()=>{
        unsubscribe();
    }
    },[])

    let logout=()=>{
        return signOut(auth);
    }
    


    let info={
        user, 
createUser,signin,logout,google,
    
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthCenter;