// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnhVEMiFeZE0EY3ZjpDi_NURAu9mZIttc",
  authDomain: "registration-a1c45.firebaseapp.com",
  databaseURL: "https://registration-a1c45-default-rtdb.firebaseio.com",
  projectId: "registration-a1c45",
  storageBucket: "registration-a1c45.appspot.com",
  messagingSenderId: "796409422381",
  appId: "1:796409422381:web:7a0c17be3c99d95d460ea4",
  measurementId: "G-DVP6NM1WWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app