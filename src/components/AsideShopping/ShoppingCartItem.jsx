import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ShoppingCartItem = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const item = {
    id: product.id,
    title: product.title,
    description: product.description,
    quantity: product.quantity,
    price: product.price,
    img: product.thumbnail,
    total: product.total,
  };

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

  const addOne = (e) => {
    e.preventDefault();
    const newCart = cart.map((el) => {
      if (el.id === item.id) {
        return {
          ...el,
          quantity: el.quantity + 1,
          total: el.total + product.price,
        };
      } else {
        return el;
      }
    });
    setCart(newCart);
  };

  const remOne = (e) => {
    e.preventDefault();
    if (item.quantity > 1) {
      const newCart = cart.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            quantity: el.quantity - 1,
            total: el.total - product.price,
          };
        } else {
          return el;
        }
      });
      setCart(newCart);
    }
  };

  return (
    <div class="shopping-cart">
      <figure className="shopping-cart-img">
        <img src={product.img} alt="bike" />
        <div class="delete-icon" onClick={removeItemFromCart}>
          <p>x</p>
        </div>
      </figure>

      <div className="shopping-cart-info">
        <p className="cart-info-title">{product.title}</p>

        <div className="cart-info-price">
          <div className="quantity-modifier">
            <p className="modifiers" onClick={remOne}>
              -
            </p>
            <p className="quantity-output">{product.quantity}</p>
            <p className="modifiers" onClick={addOne}>
              +
            </p>
          </div>
          <p className="info-price">${product.total}</p>
        </div>
      </div>
    </div>
  );
};

export { ShoppingCartItem };
