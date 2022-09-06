import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5iNMRHcQ8LEM-I7r5A1Qtlv9yWs0UCL0",
  authDomain: "ref-auth-tri.firebaseapp.com",
  projectId: "ref-auth-tri",
  storageBucket: "ref-auth-tri.appspot.com",
  messagingSenderId: "688280811307",
  appId: "1:688280811307:web:8c8e2fc0414aee9ae0b76e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
const auth = getAuth();

export { auth };