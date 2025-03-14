import React, { createContext, useContext } from "react";
import UserSvg from "./person.svg";
import "./UsuarioComponent.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const UsuarioComponent = ({ nombre }) => {
  const { isLoginIn, setLoginIn } = useContext(CartContext);
  return (
    <div
      className="usuario_widget_container"
      onClick={(e) => {
        e.preventDefault();
        document
          .querySelector(".dropdown_container")
          .classList.toggle("inactive");
      }}
    >
      <div className="usuario_name_container">
        <p className="usuario_name">{nombre}</p>
        <img src={UserSvg} alt="user_icon" />
      </div>

      <div id="dropDownUserMenu" className="dropdown_container inactive">
        <nav>
          <ul>
            <li>
              <Link to={"/my-profile"}>my profile</Link>
            </li>
            <li>
              <Link to={"/my-orders"}>my orders</Link>
            </li>
            <li
              className="li--logout"
              onClick={() => {
                setTimeout(() => {
                  setLoginIn(false);
                }, 2000);
              }}
            >
              log out
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { UsuarioComponent };
