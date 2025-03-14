import { React, createContext, useContext, useEffect, useState } from "react";
import { useGetAllProducts, useGetCategories } from "../hooks/useProducts";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToggleContext } from "./ToggleContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // call of user interface components
  const { cartAside, setCartAside, setProductDetailAside } =
    useContext(ToggleContext);

  //internal states
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [isLoginIn, setLoginIn] = useState(false);
  const [usuario, setUsuario] = useState({});
  const { productsData } = useGetAllProducts();
  const { categories } = useGetCategories();
  const MySwal = withReactContent(Swal);

  function addToCartFunction(product) {
    const item = {
      id: product.id,
      title: product.title,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      img: product.thumbnail,
      total: product.total,
    };

    MySwal.fire({
      title: `${product.title} añadido`,
      icon: "success",
      width: "40rem",
      padding: "3em",
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      setCartAside(true);
      setProductDetailAside(false);
      const isItemInCart = cart.find((el) => el.id === item.id) ? true : false;

      if (isItemInCart) {
        const newCart = cart.map((el) => {
          if (el.id === item.id) {
            return {
              ...el,
              quantity: el.quantity + product.quantity,
              total: el.total + product.total,
            };
          } else {
            return el;
          }
        });
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        const newCart = [...cart];
        newCart.push(item);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
    });
  }

  return (
    <CartContext.Provider
      value={{
        productsData,
        cart,
        isLoginIn,
        categories,
        usuario,
        setCart,
        setLoginIn,
        setUsuario,
        addToCartFunction,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
