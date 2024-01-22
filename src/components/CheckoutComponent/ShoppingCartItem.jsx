import React from "react";

const ShoppingCartItem = ({ product }) => {
  return (
    <div class="resume-shopping-cart">
      <figure>
        <img src={product.img} alt="bike" />
        <div className="number-over-cart">{product.quantity}</div>
      </figure>
      <p className="shopping-cart-title">{product.title}</p>
      <p className="shopping-cart-price">${product.total}</p>
      <div class="product-detail-close">
        <p>x</p>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
