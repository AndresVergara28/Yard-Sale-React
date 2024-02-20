import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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
  appId: "1:42717274993:web:08936c001f59b3379d0cd0",
  measurementId: "G-WMD7GVBMWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
