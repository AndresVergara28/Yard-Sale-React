import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartIcon from "../../icons/icon_shopping_cart.svg";
import "./CartWidgetComponent.scss";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { UsuarioComponent } from "../UsuarioComponent/UsuarioComponent";
import { LogearseComponent } from "../LogearseComponent/LogearseComponent";
import { ToggleContext } from "../../context/ToggleContext";

const CartWidgetComponent = () => {
  const MySwal = withReactContent(Swal);

  const { cart, isLoginIn, dropDownMenu, dropDownUserMenu, usuario } =
    useContext(CartContext);

  const { cartASide, setCartAside, toggleCartAside } =
    useContext(ToggleContext);

  const toggleAsideShoppingCart = (e) => {
    e.preventDefault();

    const isAsideProductDetailOpened = asideProductDetail.classList.contains(
      "dd-aside-description-product"
    )
      ? false
      : true;

    const isDropDownMenuOpened = dropDownMenu.classList.contains("inactive")
      ? false
      : true;

    const isDropDownUserMenuOpened = dropDownUserMenu.className.contains(
      "inactive"
    )
      ? false
      : true;

    if (
      isAsideProductDetailOpened ||
      isDropDownMenuOpened ||
      isDropDownUserMenuOpened
    ) {
      asideProductDetail.classList.add("dd-aside-description-product");
      dropDownMenu.classList.add("inactive");
      dropDownUserMenu.classList.add("inactive");

      asideShoppingCart.classList.toggle("dd-aside-shopping-cart");
    } else {
      asideShoppingCart.classList.toggle("dd-aside-shopping-cart");
    }
  };

  return (
    <ul className="cart-widget-container">
      <li className="navbar-email">
        {isLoginIn ? (
          <UsuarioComponent nombre={usuario.email} />
        ) : (
          <LogearseComponent />
        )}
      </li>
      <li className="navbar-shopping-cart" onClick={toggleCartAside}>
        <img src={CartIcon} alt="shoppingCart" className="img-for-cart" />
        <div className="number-over-cart">{cart.length}</div>
      </li>
    </ul>
  );
};

export default CartWidgetComponent;
