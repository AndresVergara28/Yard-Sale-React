import React, { useContext } from "react";
import { UserInfoComponent } from "../components/UserInfoComponent/UserInfoComponent";
import { LoginComponent } from "../components/LoginComponent/LoginComponent";
import { CartContext } from "../context/CartContext";

const Profile = () => {
  const { isLoginIn } = useContext(CartContext);
  return isLoginIn ? (
    <UserInfoComponent></UserInfoComponent>
  ) : (
    <LoginComponent></LoginComponent>
  );
};

export { Profile };
