import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtwohudkUXvVvWs9u3A6AGm2N8wObnIdA",
  authDomain: "civil-engineering-societ-a0c3a.firebaseapp.com",
  projectId: "civil-engineering-societ-a0c3a",
  storageBucket: "civil-engineering-societ-a0c3a.appspot.com",
  messagingSenderId: "738810891868",
  appId: "1:738810891868:web:7a677a232b668972356099",
  measurementId: "G-GE0WWMBW8J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
