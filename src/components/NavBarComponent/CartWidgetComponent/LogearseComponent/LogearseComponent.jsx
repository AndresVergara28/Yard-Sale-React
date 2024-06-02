import React from "react";
import { Link } from "react-router-dom";
import "./LogearseComponent.scss";

const LogearseComponent = () => {
  return (
    <Link to="/login" className="logearse-widget">
      Login
    </Link>
  );
};

export { LogearseComponent };
