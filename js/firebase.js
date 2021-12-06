// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBnuKweRAPSCz9nx55Pyte9d6dxCGCgWgI",
  authDomain: "desarrollocolaborativo-af22e.firebaseapp.com",
  projectId: "desarrollocolaborativo-af22e",
  storageBucket: "desarrollocolaborativo-af22e.appspot.com",
  messagingSenderId: "945508897875",
  appId: "1:945508897875:web:b5088eed07b62f3af7e2a6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

//console.log(env.API_KEY);
