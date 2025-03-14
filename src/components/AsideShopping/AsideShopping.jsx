import React, { useContext } from "react";
import ArrowClose from "../../icons/flechita.svg";
import "./AsideShopping.scss";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ToggleContext } from "../../context/ToggleContext";

const AsideShopping = () => {
  const { cart, asideShoppingCart } = useContext(CartContext);
  const { cartAside, toggleCartAside } = useContext(ToggleContext);

  return (
    <aside
      id="shoppingCart"
      className={`${
        cartAside ? "" : "dd-aside-shopping-cart"
      } shopping-cart-container`}
    >
      <div class="title-container" onClick={toggleCartAside}>
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

          <p className="order-total-number">
            ${cart.reduce((acumulador, el) => acumulador + el.total, 0)}
          </p>
        </div>
        <Link to={"/checkout"} onClick={toggleCartAside}>
          <button class="primary-button add-to-cart-button">Checkout</button>
        </Link>
      </div>
    </aside>
  );
};

export { AsideShopping };
