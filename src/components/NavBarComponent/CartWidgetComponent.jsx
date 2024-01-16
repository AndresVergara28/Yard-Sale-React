import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartIcon from "../../icons/icon_shopping_cart.svg";
import "./CartWidgetComponent.scss";
const CartWidgetComponent = () => {
  const { cart } = useContext(CartContext);
  const toggleAsideShoppingCart = (e) => {
    e.preventDefault();
    const asideShoppingCart = document.querySelector("#shoppingCartContainer");
    const asideProductDetail = document.querySelector("#productDetail");

    const isAsideProductDetailClosed = asideProductDetail.classList.contains(
      "dd-aside-description-product"
    );

    if (isAsideProductDetailClosed) {
      asideShoppingCart.classList.toggle("dd-aside-shopping-cart");
    } else {
      asideProductDetail.classList.add("dd-aside-description-product");
      asideShoppingCart.classList.remove("dd-aside-shopping-cart");
    }
  };

  return (
    <ul className="cart-widget-container">
      <li className="navbar-email">
        <a href="#login">
          <p>ejemplo@login.com</p>
        </a>
      </li>
      <li className="navbar-shopping-cart" onClick={toggleAsideShoppingCart}>
        <img src={CartIcon} alt="shoppingCart" />
        <div className="number-over-cart">{cart.length}</div>
      </li>
    </ul>
  );
};

export { CartWidgetComponent };
