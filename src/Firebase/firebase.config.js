// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_iDf38ShoZ93xMtAwVink9leFZb3bb_M",
  authDomain: "fir-ef0ad.firebaseapp.com",
  projectId: "fir-ef0ad",
  storageBucket: "fir-ef0ad.appspot.com",
  messagingSenderId: "767421631870",
  appId: "1:767421631870:web:198edb58759739a39a372f",
  measurementId: "G-QZRHDPXN5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;