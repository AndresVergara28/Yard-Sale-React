import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

const RegisterFormComponent = () => {
  const MySwal = withReactContent(Swal);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        MySwal.fire({
          title: "Registro Exitoso",
          icon: "success",
          timer: 2000,
          showCloseButton: true,
        });

        sendEmailVerification(user).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

        updateProfile(user, {
          displayName: `${firstName} ${lastName}`,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        document.querySelector(".form").reset();

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        MySwal.fire({
          title: "Usuario ya registrado",
          icon: "error",
          timer: 2000,
          showCloseButton: true,
        });
        // ..
      });
  };

  return (
    <div className="modal-login-component">
      <form action="" className="form" onSubmit={registerUser}>
        <label for="name" className="input-label">
          <span>Name</span>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Primer nombre"
            autoComplete="cc-given-name"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <label for="lastName" className="input-label">
          <span>Last name</span>
          <input
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder="Segundo Nombre"
            autoComplete="family-name"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </label>
        <label for="email" className="input-label">
          <span>Email Address</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="tucorreo@electronico.com"
            autoComplete="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label for="password" className="input-label">
          <span>Password</span>
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
        </label>
        <input type="submit" value="Registrar" className="submit-input" />
        <input
          type="reset"
          value="Limpiar"
          className="submit-input"
          style={{
            backgroundColor: "var(--very-light-pink)",
          }}
        />

        <Link to="/login">
          <p>volver</p>
        </Link>
      </form>
    </div>
  );
};

export { RegisterFormComponent };
