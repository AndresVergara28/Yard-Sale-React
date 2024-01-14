import React, { useContext } from "react";
import ArrowClose from "../../icons/flechita.svg";
import "./AsideShopping.scss";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { CartContext } from "../../context/CartContext";

const AsideShopping = () => {
  const { cart, setCart } = useContext(CartContext);
  const hideASideShoppingCart = (e) => {
    e.preventDefault();
    const shoppingCartAside = document.querySelector("#shoppingCartContainer");
    shoppingCartAside.classList.add("dont-display-aside");
  };

  return (
    <aside
      id="shoppingCartContainer"
      className="shopping-cart-container dont-display-aside"
    >
      <div class="title-container" onClick={hideASideShoppingCart}>
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

          <p className="order-total-number">$560.00</p>
        </div>
        <button class="primary-button add-to-cart-button">Checkout</button>
      </div>
    </aside>
  );
};

export { AsideShopping };
