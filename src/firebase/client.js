
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAhnoTu3ZmqD2oC4O1DoW3L7JKt6mOXg_s",
  authDomain: "e-commerce57770.firebaseapp.com",
  projectId: "e-commerce57770",
  storageBucket: "e-commerce57770.appspot.com",
  messagingSenderId: "720289450872",
  appId: "1:720289450872:web:b5fed334d66392281c168d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);