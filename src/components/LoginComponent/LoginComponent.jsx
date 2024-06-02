import React, { useContext, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { CartContext } from "../../context/CartContext";
import "./LoginComponent.scss";

const LoginComponent = () => {
  const MySwal = withReactContent(Swal);
  const auth = getAuth();
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const { isLoginIn, setLoginIn } = useContext(CartContext);
  const [usuario, setUsuario] = useState(null);

  // funcion para iniciar sesion con usuario
  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, userID, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.email;
        setLoginIn(true);

        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "You are logged in",
          showConfirmButton: false,
          timer: 1500,
        });

        // ...
      })
      .catch((error) => {
        console.log("no verificado");
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
    setUsuario(auth.currentUser);
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
          <p>Forgot your password?</p>
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
