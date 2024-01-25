import React from "react";
import MenuMobileIco from "./icon_menu.svg";
import { Link } from "react-router-dom";

const MenuMobile = ({ categories }) => {
  return (
    <div className="menu-mobile-component">
      <img
        src={MenuMobileIco}
        alt=""
        className="menu-mobile-icon"
        onClick={() => {
          const container = document.querySelector(".menu-mobile-dropdown");

          container.classList.toggle("inactive");
        }}
      />

      <div className="menu-mobile-dropdown">
        <ul className="menu-mobile-dropdown-ul">
          {categories.map((category) => {
            return (
              <li key={category} className="menu-mobile-dropdown-item">
                <Link to={`./products/category/${category}`}>{category}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
