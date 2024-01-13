import { React, createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  

  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(cart.length);
  const [productInAside, setProductInAside] = useState({});

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityCart,
        setCart,
        setQuantityCart,
        productInAside,
        setProductInAside,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
