import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./LoginComponent.scss";
import { CartContext } from "../../context/CartContext";

const LoginComponent = () => {
  const {
    user,
    setUser,
    password,
    setPassword,
    username,
    setUsername,
    loginUser,
    setLoginIn,
  } = useContext(CartContext);

  return (
    <div className="modal-login-component">
      <form
        action=""
        onSubmit={(e) => {
          loginUser(e, username, password, setLoginIn);
        }}
      >
        <label htmlFor="email" className="input-label">
          <span>USUARIO</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="alguien123@ejemplo.com"
            autoComplete="email"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password" className="input-label">
          <span>contraseña</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="***********"
            autoComplete="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            mirar contraseña
          </button>
          <Link to={"/forgot-password"}>
            <p>Forgot your password?</p>
          </Link>
        </label>
        <input type="submit" value="Ingresar" className="submit-input" />
        <Link to={"/register"} className="link-to-register">
          <button>Register</button>
        </Link>
      </form>
    </div>
  );
};

export { LoginComponent };
