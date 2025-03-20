import React from "react";
import { Link } from "react-router-dom";
import "./LogearseComponent.scss";

const LogearseComponent = () => {
  return (
    <Link to="/my-profile" className="logearse-widget">
      Login
    </Link>
  );
};

export { LogearseComponent };
