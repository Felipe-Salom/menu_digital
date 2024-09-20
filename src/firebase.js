// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6qc-X34Ojl85Gk_fRSBS3OZ5SmPuG_dY",
  authDomain: "menudigital-4b9cc.firebaseapp.com",
  projectId: "menudigital-4b9cc",
  storageBucket: "menudigital-4b9cc.appspot.com",
  messagingSenderId: "294277176190",
  appId: "1:294277176190:web:4c87625266277b5257312f",
  measurementId: "G-KDQV60TY01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);