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

  const { cart, isLoginIn, dropDownMenu, dropDownUserMenu, user } =
    useContext(CartContext);

  const { toggleCartAside } = useContext(ToggleContext);

  return (
    <ul className="cart-widget-container">
      <li className="navbar-email">
        {isLoginIn ? (
          <UsuarioComponent nombre={user.email} />
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
