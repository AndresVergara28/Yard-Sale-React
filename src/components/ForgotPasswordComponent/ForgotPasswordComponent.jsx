import React, { useState } from "react";
import "./ForgotPasswordComponent.scss";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const sendEmail = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="modal-reset-password">
      <form action="" onSubmit={sendEmail}>
        <label for="email" className="input-label">
          <span>EMAIL</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="alguien123@ejemplo.com"
            autoComplete="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <input type="submit" value="RESET PASSWORD" className="submit-input" />
        <Link to={"/login"}>
          <button style={{ color: "blue" }}>volver</button>
        </Link>
      </form>
    </div>
  );
};

export { ForgotPasswordComponent };
