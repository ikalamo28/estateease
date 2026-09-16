// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg4Mks5XUjd64SURfATfX6HLeXeUnhMkM",
  authDomain: "estateease-4559c.firebaseapp.com",
  projectId: "estateease-4559c",
  storageBucket: "estateease-4559c.firebasestorage.app",
  messagingSenderId: "886698256324",
  appId: "1:886698256324:web:a969bf9ad9d49b138ce691",
  measurementId: "G-H3138HPMC1"
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const gooleProvider = new GoogleAuthProvider();
