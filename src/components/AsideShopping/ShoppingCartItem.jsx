import React, { useContext } from "react";
import IconClose from "../../icons/icon_close.png";
import { CartContext } from "../../context/CartContext";

const ShoppingCartItem = ({ product }) => {
  const { cart } = useContext(CartContext);

  const position = () => {
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      if (element.id === product.id) {
        return i;
      }
    }
  };


  return (
    <div class="shopping-cart">
      <figure>
        <img src={product.img} alt="bike" />
        <div className="number-over-cart">{product.quantity}</div>
      </figure>
      <p className="shopping-cart-title">{product.title}</p>
      <p className="shopping-cart-price">${product.price}</p>
      <div class="product-detail-close">
        <img src={IconClose} alt="close" />
      </div>
    </div>
  );
};

export { ShoppingCartItem };
