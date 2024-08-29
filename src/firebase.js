// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDcOU_yGODORNM04qfx-VJMPinKZVyQ6YU",
  authDomain: "cinema-booking-site.firebaseapp.com",
  projectId: "cinema-booking-site",
  storageBucket: "cinema-booking-site.appspot.com",
  messagingSenderId: "585619575264",
  appId: "1:585619575264:web:32cd573732163d8242db85"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();