// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuiiR_Xgi0-NNbh25dwapXQcukN76xsFw",
  authDomain: "ecom-ef4d2.firebaseapp.com",
  projectId: "ecom-ef4d2",
  storageBucket: "ecom-ef4d2.appspot.com",
  messagingSenderId: "210046630375",
  appId: "1:210046630375:web:b4b60ab67a21ef514e2542",
  measurementId: "G-8V5LGK8527",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
