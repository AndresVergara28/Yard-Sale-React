import React, { useContext } from "react";
import MenuMobileIco from "./icon_menu.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./MenuMobile.scss";

const MenuMobile = ({ categories }) => {
  const { dropDownMenu, asideShoppingCart, asideProductDetail } =
    useContext(CartContext);

  const closeMenu = () => {
    setTimeout(() => {
      dropDownMenu.classList.add("inactive");
    }, 500);
  };

  const toggleMenu = () => {
    const isAsideShoppingCartOpened = asideShoppingCart.classList.contains(
      "dd-aside-shopping-cart"
    )
      ? false
      : true;
    const isAsideProductDetailOpened = asideProductDetail.classList.contains(
      "dd-aside-description-product"
    )
      ? false
      : true;

    if (isAsideProductDetailOpened || isAsideShoppingCartOpened) {
      asideProductDetail.classList.add("dd-aside-description-product");
      asideShoppingCart.classList.add("dd-aside-shopping-cart");
      dropDownMenu.classList.toggle("inactive");
    } else {
      dropDownMenu.classList.toggle("inactive");
    }
  };
  return (
    <div className="menu-mobile-component">
      <img
        src={MenuMobileIco}
        alt=""
        className="menu-mobile-icon"
        onClick={toggleMenu}
      />

      <div className="menu-mobile-dropdown inactive" id="dropDownMenu">
        <ul className="menu-mobile-dropdown-ul">
          <li className="menu-mobile-dropdown-item">
            <Link
              to={"./products"}
              className="menu-mobile-dropdown-item-link"
              onClick={closeMenu}
            >
              All
            </Link>
          </li>
          {categories.map((category) => {
            return (
              <li key={category} className="menu-mobile-dropdown-item">
                <Link
                  to={`./products/category/${category}`}
                  className="menu-mobile-dropdown-item-link"
                  onClick={closeMenu}
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
