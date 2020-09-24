import React from "react";
import "./App.css";

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

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

const auth = firebase.auth();
const firestore = firebase.firestore();
const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>{user ? <h1>Signed in</h1> : <h1>Not Signed In</h1>}</section>
    </div>
  );
}

export default App;
