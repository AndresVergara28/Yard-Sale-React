import React, { useContext, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { CartContext } from "../../context/CartContext";
import "./LoginComponent.scss";

const LoginComponent = () => {
  const MySwal = withReactContent(Swal);
  const auth = getAuth();
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const { isLoginIn, setLoginIn, usuario, setUsuario } =
    useContext(CartContext);

  // funcion para iniciar sesion con usuario
  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, userID, password)
      .then((userCredential) => {
        // Signed in
        setUsuario({
          email: userCredential.user.email,
          name: userCredential.user.displayName,
        });

        MySwal.fire({
          position: "center",
          icon: "success",
          title: "You are logged in",
          showConfirmButton: true,
        }).then(() => {
          setLoginIn(true);
        });

        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
          } else {
            // User is signed out
            // ...
          }
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        MySwal.fire({
          position: "top-end",
          icon: "error",
          title: "wrong password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="modal-login-component">
      <form action="" onSubmit={loginUser}>
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
