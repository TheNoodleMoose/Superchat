import React from "react";
import "./App.css";

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";
import ChatRoom from "./components/ChatRoom";

firebase.initializeApp({
  apiKey: "AIzaSyBUXM_TkWWCnB506bXWA-qFLPweMVIddzY",
  authDomain: "superchat-b7fff.firebaseapp.com",
  databaseURL: "https://superchat-b7fff.firebaseio.com",
  projectId: "superchat-b7fff",
  storageBucket: "superchat-b7fff.appspot.com",
  messagingSenderId: "664974191121",
  appId: "1:664974191121:web:348418d54e1a91e5cd1fb0",
  measurementId: "G-01WXFEE31L"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>{user ? <SignOutButton /> : <SignInButton />}</header>
      <section>{user ? <ChatRoom /> : <h1>Not Signed In</h1>}</section>
    </div>
  );
}

export default App;
