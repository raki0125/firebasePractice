import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDqK00WLE-YFfF0HrFIIQ_rSRzmjjV6Lro",
  authDomain: "e-commerce-b44e6.firebaseapp.com",
  projectId: "e-commerce-b44e6",
  storageBucket: "e-commerce-b44e6.appspot.com",
  messagingSenderId: "1082516530077",
  appId: "1:1082516530077:web:4ae5868622fd98bf664574",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
