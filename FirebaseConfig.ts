// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQTeulgvLhVP8uZTLJcori0-KCqix3txs",
  authDomain: "homework2-f202d.firebaseapp.com",
  projectId: "homework2-f202d",
  storageBucket: "homework2-f202d.appspot.com",
  messagingSenderId: "1090535945765",
  appId: "1:1090535945765:web:b3f83e362421c685b671cc",
  measurementId: "G-MBXYC74GLK"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP); 
const analytics = getAnalytics(FIREBASE_APP);