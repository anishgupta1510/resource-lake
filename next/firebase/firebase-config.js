// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9guG2Cbm_hyv84KRss0MeLBI3SVEpX4U" ,
  authDomain: "request-88ff4.firebaseapp.com",
  projectId: "request-88ff4",
  storageBucket: "request-88ff4.appspot.com",
  messagingSenderId: "61594518307",
  appId: "1:61594518307:web:bd3e963787af866122c296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const provider = new GoogleAuthProvider();

const auth = getAuth(app)

export {app,storage,provider,auth};