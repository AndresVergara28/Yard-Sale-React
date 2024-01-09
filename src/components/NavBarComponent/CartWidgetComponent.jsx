import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartIcon from "../../icons/icon_shopping_cart.svg";
import "./CartWidgetComponent.scss";
const CartWidgetComponent = () => {
  const { cart, quantityCart } = useContext(CartContext);


  return (
    <ul className="cart-widget-container">
      <li className="navbar-email">
        <a href="#login">
          <p>ejemplo@login.com</p>
        </a>
      </li>
      <li className="navbar-shopping-cart">
        <img src={CartIcon} alt="shoppingCart" />
        <div className="number-over-cart">{quantityCart}</div>
      </li>
    </ul>
  );
};

export { CartWidgetComponent };
