import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANM_r8nOGa1CAW77edsS3fLccqArAXw8U",
  authDomain: "my-react-project-coder.firebaseapp.com",
  projectId: "my-react-project-coder",
  storageBucket: "my-react-project-coder.appspot.com",
  messagingSenderId: "42717274993",
  appId: "1:42717274993:web:3c05a086255a60819d0cd0",
  measurementId: "G-WH4NSQWTD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
