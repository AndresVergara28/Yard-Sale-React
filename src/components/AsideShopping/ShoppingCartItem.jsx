import React, { useContext } from "react";
import IconClose from "../../icons/icon_close.png";
import { CartContext } from "../../context/CartContext";

const ShoppingCartItem = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const removeItemFromCart = (e) => {
    e.preventDefault();

    const position = getIndex(product.id);

    function getIndex(id) {
      for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        console.log(element);
        if (element.id === id) {
          return i;
        }
      }
    }
  };
  return (
    <div class="shopping-cart">
      <figure>
        <img src={product.img} alt="bike" />
      </figure>
      <p className="shopping-cart-title">{product.title}</p>
      <p className="shopping-cart-price">${product.price}</p>
      <div class="product-detail-close">
        <img src={IconClose} alt="close" onClick={removeItemFromCart} />
      </div>
    </div>
  );
};

export { ShoppingCartItem };
