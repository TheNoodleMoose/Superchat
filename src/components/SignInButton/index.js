import React from "react";
import firebase from "firebase";
import { auth } from "../../App";

const SignInButton = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignInButton;
