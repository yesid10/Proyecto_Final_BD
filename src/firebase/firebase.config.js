import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAklIB2ubYm0XFHWHGt-n6ws_iK2-4Ju38",
  authDomain: "bduis-34dd8.firebaseapp.com",
  projectId: "bduis-34dd8",
  storageBucket: "bduis-34dd8.firebasestorage.app",
  messagingSenderId: "40446054824",
  appId: "1:40446054824:web:81dbadc26e0db053250d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, signInWithPopup, signOut};