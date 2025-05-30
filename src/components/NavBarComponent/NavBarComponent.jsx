import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import MainLogo from "./logo_yard_sale.svg";

import { Nav, NavDropdown, NavItem, NavLink } from "react-bootstrap";
import "./NavBarComponent.scss";
import { CartContext } from "../../context/CartContext";
import { MenuMobile } from "../MenuMobileComponent/MenuMobile";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

const NavBarComponent = () => {
  const { categories } = useContext(CartContext);

  return (
    <header className="header-container">
      <Navbar className="navbar-container">
        <Navbar.Brand className="nav-brand">
          <MenuMobile categories={categories} />
          <Link to={"./"}>
            <img src={MainLogo} alt="MainLogo" className="main-logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="nav-links">
          <NavLink className="links_item links_item--all">
            <Link to={"/products"}> All </Link>
          </NavLink>

          <NavDropdown
            className="links_item links_item--categories"
            title="Categories"
            id="basic-nav-dropdown"
          >
            {categories.map((category) => {
              return (
                <NavDropdown.Item key={category} className="links_item--all">
                  <Link to={`./products/category/${category}`}>{category}</Link>
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className="nav-login">
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export { NavBarComponent };
