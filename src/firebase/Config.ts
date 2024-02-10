import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5rRBdUAWsYUfCJ4vfbwP2IO9_4473uGw",
  authDomain: "auth-testing-b4bf3.firebaseapp.com",
  projectId: "auth-testing-b4bf3",
  storageBucket: "auth-testing-b4bf3.appspot.com",
  messagingSenderId: "285065722075",
  appId: "1:285065722075:web:e87394781958fcc670b4fe",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
