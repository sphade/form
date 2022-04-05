// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2AEDR3UOlIAntaD3GXGjGIxmWIrMfY0Q",
  authDomain: "chatter-5d266.firebaseapp.com",
  projectId: "chatter-5d266",
  storageBucket: "chatter-5d266.appspot.com",
  messagingSenderId: "483777867456",
  appId: "1:483777867456:web:231f1398038bb90fe64725",
  measurementId: "G-XWJKDHPS7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
