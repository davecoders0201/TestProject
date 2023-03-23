// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxI0e5_VXk4NrlH682vLlxYVnydu20d1M",
  authDomain: "testapp-6cb84.firebaseapp.com",
  projectId: "testapp-6cb84",
  storageBucket: "testapp-6cb84.appspot.com",
  messagingSenderId: "888928321256",
  appId: "1:888928321256:web:303049d6b7fb68167bd35d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);