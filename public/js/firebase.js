// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm8IR2CfIltCov9sutNkrFB74G0eQ21FI",
  authDomain: "itelevenreviewer.firebaseapp.com",
  projectId: "itelevenreviewer",
  storageBucket: "itelevenreviewer.firebasestorage.app",
  messagingSenderId: "121324313818",
  appId: "1:121324313818:web:63015c33a83f49ff1a99e3",
  measurementId: "G-N5KGR3EDEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);