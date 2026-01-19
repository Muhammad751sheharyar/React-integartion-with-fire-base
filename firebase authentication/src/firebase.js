// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYagJhSDavXX0KvKOnAc6X5DQ0CJwLelI",
  authDomain: "first-project-dfe60.firebaseapp.com",
  projectId: "first-project-dfe60",
  storageBucket: "first-project-dfe60.firebasestorage.app",
  messagingSenderId: "19004093440",
  appId: "1:19004093440:web:7ab75112058492e79494e5",
  measurementId: "G-BNRYLQ0WGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export{auth};