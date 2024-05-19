import React, { useState } from "react";
import { Navigate, Link } from "react-router";
import {
  dosignInWithEmailAndPassword,
  dosignInWithGoogle,
} from "../../../firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await dosignInWithEmailAndPassword(email, password);
    }
  };
  const onGoogleSignIn = async (e) => {
    e.preventDefault()  
    if(!isSigningIn){
        setIsSigningIn(true);
        dosignInWithGoogle().catch(err => {
            setIsSigningIn(false)
        })

        }
  }
  return <div>
   {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
<form onSubmit={onSubmit}></form>
  </div>;
};

export default Login;
