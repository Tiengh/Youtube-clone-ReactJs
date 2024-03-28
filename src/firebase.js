import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDPboqC4gttSeW_oBVGT1d5w3NDGER53TM",
  authDomain: "video-966c3.firebaseapp.com",
  projectId: "video-966c3",
  storageBucket: "video-966c3.appspot.com",
  messagingSenderId: "448694583589",
  appId: "1:448694583589:web:886241218d420488469acc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;