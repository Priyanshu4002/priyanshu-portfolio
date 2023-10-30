import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZ8eBwuH_1aF_XYdljMK_NN9jLFmzkXkk",
  authDomain: "priyanshu-portfolio-8a37e.firebaseapp.com",
  projectId: "priyanshu-portfolio-8a37e",
  storageBucket: "priyanshu-portfolio-8a37e.appspot.com",
  messagingSenderId: "498328895941",
  appId: "1:498328895941:web:c8e0f413e63be21ff18bac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();