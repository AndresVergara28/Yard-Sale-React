import React, { useContext } from "react";
import IconClose from "../../icons/icon_close.png";
import { CartContext } from "../../context/CartContext";

const ShoppingCartItem = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const removeItemFromCart = (e) => {
    e.preventDefault();
    const newCart = [...cart];


    const getIndex = (id) => {
      for (let i = 0; i < cart.length; i++) {
        const identificador = cart[i].id;
        if (identificador === id) {
          return i;
        }
      }
    };

    const position = getIndex(product.id);
    newCart.splice(position, 1);
    setCart(newCart);
  };

  return (
    <div class="shopping-cart">
      <figure>
        <img src={product.img} alt="bike" />
        <div className="number-over-cart">{product.quantity}</div>
      </figure>
      <p className="shopping-cart-title">{product.title}</p>
      <p className="shopping-cart-price">${product.total}</p>
      <div class="product-detail-close" onClick={removeItemFromCart}>
        <p>x</p>
      </div>
    </div>
  );
};

export { ShoppingCartItem };
