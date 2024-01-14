import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartIcon from "../../icons/icon_shopping_cart.svg";
import "./CartWidgetComponent.scss";
const CartWidgetComponent = () => {
  const { cart, quantityCart } = useContext(CartContext);

  const openAsideShoppinCart = (e) => {
    e.preventDefault();
    const asideShoppingCart = document.querySelector("#shoppingCartContainer");
    const asideProductDetail = document.querySelector("#productDetail");

    const asideProductDetailIsClosed =
      asideProductDetail.classList.contains("inactive");

    if (asideProductDetailIsClosed) {
      asideShoppingCart.classList.toggle("dont-display-aside");
    } else {
      asideProductDetail.classList.add("inactive");
      asideShoppingCart.classList.remove("dont-display-aside");
    }
  };

  return (
    <ul className="cart-widget-container">
      <li className="navbar-email">
        <a href="#login">
          <p>ejemplo@login.com</p>
        </a>
      </li>
      <li className="navbar-shopping-cart" onClick={openAsideShoppinCart}>
        <img src={CartIcon} alt="shoppingCart" />
        <div className="number-over-cart">{quantityCart}</div>
      </li>
    </ul>
  );
};

export { CartWidgetComponent };
