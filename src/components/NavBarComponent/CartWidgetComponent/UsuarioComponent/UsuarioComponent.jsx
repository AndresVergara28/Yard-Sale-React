import React from "react";
import UserSvg from "./person.svg";
import "./UsuarioComponent.scss";

const UsuarioComponent = ({ nombre }) => {
  return (
    <div className="usuario_widget">
      <p>{nombre}</p>
      <img src={UserSvg} alt="" />
    </div>
  );
};

export { UsuarioComponent };
