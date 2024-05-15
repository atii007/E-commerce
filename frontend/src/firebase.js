// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJqlz7Y7J2onn98jmtO5P1QTOtZDnMeMU",
  authDomain: "shopper-afb67.firebaseapp.com",
  databaseURL:
    "https://shopper-afb67-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopper-afb67",
  storageBucket: "shopper-afb67.appspot.com",
  messagingSenderId: "379200498701",
  appId: "1:379200498701:web:53b2fef24f736c9dcb3944",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
