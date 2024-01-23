import { React, createContext, useState } from "react";
import { useGetAllProducts, useGetCategories } from "../hooks/useProducts";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productInAside, setProductInAside] = useState({});
  const { productsData } = useGetAllProducts();
  const { categories } = useGetCategories();

  const asideShoppingCart = document.querySelector("#shoppingCart");
  const asideProductDetail = document.querySelector("#productDetail");

  function addToCartFunction(product) {

    asideShoppingCart.classList.remove("dd-aside-shopping-cart");
    asideProductDetail.classList.add("dd-aside-description-product");

    const item = {
      id: product.id,
      title: product.title,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      img: product.thumbnail,
      total: product.total,
    };

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
  }

  return (
    <CartContext.Provider
      value={{
        productsData,
        cart,
        productInAside,
        categories,
        asideProductDetail,
        asideShoppingCart,
        setCart,
        setProductInAside,
        addToCartFunction,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
