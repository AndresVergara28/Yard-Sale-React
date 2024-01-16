import { React, createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [productInAside, setProductInAside] = useState({});

 

  return (
    <CartContext.Provider
      value={{
        cart,
        productInAside,
        setCart,
        setProductInAside

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
