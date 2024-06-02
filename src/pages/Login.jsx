import React, { useContext } from "react";
import { LoginComponent } from "../components/LoginComponent/LoginComponent";
import { CartContext } from "../context/CartContext";
import { UserInfoComponent } from "../components/UserInfoComponent/UserInfoComponent";

const Login = () => {
  const { isLoginIn } = useContext(CartContext);
  return <div>{isLoginIn ? <UserInfoComponent/> : <LoginComponent />};</div>;
};

export { Login };
