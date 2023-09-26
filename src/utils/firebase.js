// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxFOJJTQvDLAClnYg61ebxb2_IbISS_ds",
  authDomain: "sk-netflix-gpt.firebaseapp.com",
  projectId: "sk-netflix-gpt",
  storageBucket: "sk-netflix-gpt.appspot.com",
  messagingSenderId: "862540532240",
  appId: "1:862540532240:web:4cda414f02ee3b0f58d895",
  measurementId: "G-4SH0NG98VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();