// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa2cKzf2uZ2TwMC3R7TPGrJIYBGqJuNSo",
  authDomain: "elevated-steel-solutions.firebaseapp.com",
  projectId: "elevated-steel-solutions",
  storageBucket: "elevated-steel-solutions.appspot.com",
  messagingSenderId: "1093993197590",
  appId: "1:1093993197590:web:e8c42793e0afdbadb68537",
  measurementId: "G-YNJKB0N80W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { analytics, auth };
