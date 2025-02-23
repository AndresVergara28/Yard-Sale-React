import { React, createContext, useState } from "react";
import { useGetAllProducts, useGetCategories } from "../hooks/useProducts";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoginIn, setLoginIn] = useState(false);
  const [productInAside, setProductInAside] = useState({});
  const [usuario, setUsuario] = useState({});
  const { productsData } = useGetAllProducts();
  const { categories } = useGetCategories();
  const MySwal = withReactContent(Swal);

  const asideShoppingCart = document.querySelector("#shoppingCart");
  const asideProductDetail = document.querySelector("#productDetail");
  const dropDownMenu = document.querySelector("#dropDownMenu");
  const dropDownUserMenu = document.querySelector("#dropDownUserMenu");

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
      asideShoppingCart.classList.remove("dd-aside-shopping-cart");
      asideProductDetail.classList.add("dd-aside-description-product");
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
      } else {
        const newCart = [...cart];
        newCart.push(item);
        setCart(newCart);
      }
    });
  }

  return (
    <CartContext.Provider
      value={{
        productsData,
        cart,
        isLoginIn,
        productInAside,
        categories,
        usuario,
        asideProductDetail,
        asideShoppingCart,
        dropDownMenu,
        dropDownUserMenu,
        setCart,
        setLoginIn,
        setUsuario,
        setProductInAside,
        addToCartFunction,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
