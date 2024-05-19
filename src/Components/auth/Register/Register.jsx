import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/authContext";
import { doSignOut, docreateUserWithEmailAndPassword } from "../../../firebase/auth";
import { i } from "vite/dist/node/types.d-aGj9QkWt";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return <div>
  </div>;
};

export default Register; 
