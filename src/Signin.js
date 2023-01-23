import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "./firebase";

const Signin = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
 const userDocRef= await createUserDocumentFromAuth(user)
    console.log(logGoogleUser);
  };
  return (
    <div>
      
      <button onClick={logGoogleUser}>sign</button>
      
    </div>
  );
};

export default Signin;
