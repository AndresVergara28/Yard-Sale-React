import { React, createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart ] = useState(cart.length);

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityCart,
        setCart,
        setQuantityCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
