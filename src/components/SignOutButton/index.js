import React from "react";
import { auth } from "../../App";

const SignOutButton = () => {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
};
export default SignOutButton;
