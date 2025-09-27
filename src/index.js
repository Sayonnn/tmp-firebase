// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL-eNoZpwyO7K3vlNqB245DPE0qBehmR8",
  authDomain: "portfolio-1c0e5.firebaseapp.com",
  projectId: "portfolio-1c0e5",
  storageBucket: "portfolio-1c0e5.appspot.com",
  messagingSenderId: "40492063141",
  appId: "1:40492063141:web:fb5ccbe2e69d61c551f04c",
  measurementId: "G-5MWH7QGSRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);