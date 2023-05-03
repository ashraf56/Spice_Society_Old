import React, { createContext, useState } from 'react';
import App from '../../App';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../../firebase/firebase.config';

export let Authcontext=createContext(null);
const auth = getAuth(app);

const AuthCenter = ({children}) => {

    let [user,setUser]=useState(null);
    let [loader,setLoader]=useState(true);

let createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password);
}

let signIN=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}

    let info={
        user, 
createUser,signIN
    
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthCenter;