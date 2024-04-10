// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXyAcxjw5w34D5quzYGUGOeTdeTk37BIE",
  authDomain: "devshowcase-bc64a.firebaseapp.com",
  projectId: "devshowcase-bc64a",
  storageBucket: "devshowcase-bc64a.appspot.com",
  messagingSenderId: "159551868264",
  appId: "1:159551868264:web:b9c1a2632d931845625add",
  measurementId: "G-1GGNG07DD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);