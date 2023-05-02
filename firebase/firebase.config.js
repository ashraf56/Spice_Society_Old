// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Bzsi1BZXVXC7YA9M8l9BCBxgnEw4Tf8",
  authDomain: "chef-hunter-bfc80.firebaseapp.com",
  projectId: "chef-hunter-bfc80",
  storageBucket: "chef-hunter-bfc80.appspot.com",
  messagingSenderId: "553985267257",
  appId: "1:553985267257:web:4e3e94caf5a5f8a4ef9fe8",
  measurementId: "G-EYB5X6QCVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;