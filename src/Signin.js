import React from "react";
import { signInWithGooglePopup } from "./firebase";

const Signin = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response)
  };
  return (
    <div>
      
      <button onClick={logGoogleUser}>sign</button>
      
    </div>
  );
};

export default Signin;
