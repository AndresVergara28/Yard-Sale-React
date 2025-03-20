import { React, createContext, useContext, useEffect, useState } from "react";
import { useProductsActions } from "../hooks/useProducts";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { ToggleContext } from "./ToggleContext";
import { useCartActions } from "../hooks/useCart";
import { useUserActions } from "../hooks/useUser";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // initialization of Myswal
  const MySwal = withReactContent(Swal);

  // Initialize firebase

  // call of user interface components
  const { setCartAside, setProductDetailAside } = useContext(ToggleContext);

  //Cart states
  const [cart, setCart] = useState([]);

  // Getting product data and categories using custom hooks.
  const { productsData, categories } = useProductsActions();

  // Usuario states
  const [isLoginIn, setLoginIn] = useState(false);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const { addToCartFunction } = useCartActions(
    setCartAside,
    setProductDetailAside,
    setCart
  );

  const { loginUser } = useUserActions(setUser);

  return (
    <CartContext.Provider
      value={{
        productsData,
        cart,
        categories,
        setCart,
        addToCartFunction,
        isLoginIn,
        setLoginIn,
        user,
        setUser,
        username,
        setUsername,
        password,
        setPassword,
        loginUser,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
