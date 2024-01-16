import React, { useContext } from "react";
import ArrowClose from "../../icons/flechita.svg";
import "./AsideShopping.scss";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { CartContext } from "../../context/CartContext";

const AsideShopping = () => {
  const { cart } = useContext(CartContext);

  const hideAsideShoppingCart = (e) => {
    e.preventDefault();
    const asideShoppingCart = document.querySelector("#shoppingCartContainer");
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains(
      "dd-aside-shopping-cart"
    );
    if (!isAsideShoppingCartClosed) {
      asideShoppingCart.classList.add("dd-aside-shopping-cart");
    }
  };

  return (
    <aside
      id="shoppingCartContainer"
      className="shopping-cart-container dd-aside-shopping-cart"
    >
      <div class="title-container" onClick={hideAsideShoppingCart}>
        <img
          src={ArrowClose}
          alt="arrow"
          className="title-container-backLogo"
        />
        <p class="title-container-title">My orders</p>
      </div>
      <div className="shopping-cart-list">
        {cart.map((product) => {
          return <ShoppingCartItem key={product.id} product={product} />;
        })}
      </div>
      <div class="my-order-content">
        <div class="order">
          <p className="order-total-title">
            <span>Total</span>
          </p>

          <p className="order-total-number">${cart.reduce((acumulador, el) => acumulador + el.total, 0)}</p>
        </div>
        <button class="primary-button add-to-cart-button">Checkout</button>
      </div>
    </aside>
  );
};

export { AsideShopping };
