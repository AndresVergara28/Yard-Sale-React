import { React, createContext, useState } from "react";
import { useGetAllProducts, useGetCategories } from "../hooks/useProducts";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productInAside, setProductInAside] = useState({});
  const { productsData } = useGetAllProducts();
  const { categories } = useGetCategories();
  console.log(categories);
  function addToCartFunction(product) {
    const asideShoppingCart = document.querySelector("#shoppingCartContainer");
    const asideProductDetail = document.querySelector("#productDetail");

    asideShoppingCart.classList.remove("dd-aside-shopping-cart");
    asideProductDetail.classList.add("dd-aside-description-product");

    const item = {
      id: product.id,
      title: product.title,
      description: product.description,
      quantity: 1,
      price: product.price,
      img: product.thumbnail,
      total: product.price,
    };

    const isItemInCart = cart.find((el) => el.id === item.id) ? true : false;

    if (isItemInCart) {
      const newCart = cart.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            quantity: el.quantity + 1,
            total: el.total + el.price,
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
