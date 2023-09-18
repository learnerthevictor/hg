// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRA6M_kBXzXcGegi8jEHyY7WAlK38uzj0",
  authDomain: "shopkart-11.firebaseapp.com",
  databaseURL: "https://shopkart-11-default-rtdb.firebaseio.com",
  projectId: "shopkart-11",
  storageBucket: "shopkart-11.appspot.com",
  messagingSenderId: "654274020359",
  appId: "1:654274020359:web:3d2a8562e073ef28d616a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth' 
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAMYrSRUG4U0uTb3Z4wjvd824RFejwCJNM",
//   authDomain: "react-auth-ac143.firebaseapp.com",
//   projectId: "react-auth-ac143",
//   storageBucket: "react-auth-ac143.appspot.com",
//   messagingSenderId: "493258992989",
//   appId: "1:493258992989:web:058f62914cc2ac72a20cb4"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
