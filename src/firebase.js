import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, Firestore } from "firebase/firestore";

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
  prompt:"select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);


// initilizing firestore

export const db = getFirestore();                              
export const createUserDocumentFromAuth = async(userAuth)=> { 
  const userDocRef = doc(db,'users',userAuth.uid)             
  const userSnapShot = await getDoc(userDocRef)      
  console.log(userSnapShot)       

// user data does not exist so creating user data with setDoc that means creating a data in firestore

// if(!userSnapShot.exists()){
//  const {displayName , email }= userAuth
//  const createdAt = new Date();

// try {
//   await setDoc(userDocRef,{
//     displayName,
//     email,
//     createdAt
//   })
  
// } catch (error) {
//   console.log('error creating a user', error.message);
// }


// }

// return userDocRef; // why we want to return if exist we are going to return


if(!userSnapShot.exists()){
  const{email, displayName} = userAuth;
  const createdAt = new Date()

try{
await setDoc(userDocRef, {
email,
      displayName,
      createdAt
    });

  }catch(err)
  {
console.log('errror while creating a user',err.message);
  }
}
} 






// creating database
//creating variable that is getting a request from db
//creating doc to getting a details note : doc containes user details for eg: user API 
// getDoc is getting a actual detailes from firestore