import React, { useState } from "react";
import "./LoginComponent.scss";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="modal-login-component">
      <form action="">
        <label for="email" className="input-label">
          <span>USUARIO</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="alguien123@ejemplo.com"
            autoComplete="email"
            required
            onChange={(e) => {
              setUserID(e.target.value);
            }}
          />
        </label>
        <label for="password" className="input-label">
          <span>contraseña</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="contraseña"
            autoComplete="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p>Forgot your password?</p>
        </label>
        <input
          type="submit"
          value="Ingresar"
          className="submit-input"
          onClick={(e) => {
            e.preventDefault();
          }}
        />
        <Link to={"/register"} className="link-to-register">
          <button>Register</button>
        </Link>
      </form>
    </div>
  );
};

export { LoginComponent };
