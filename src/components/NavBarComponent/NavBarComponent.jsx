import Navbar from "react-bootstrap/Navbar";
import MainLogo from "./logo_yard_sale.svg";
import { CartWidgetComponent } from "./CartWidgetComponent/CartWidgetComponent";
import "./NavBarComponent.scss";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import MenuMobile from "./MenuMobileComponent/MenuMobile";

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
          <Nav.Link className="links-item">
            <Link to={"/products"}> All </Link>
          </Nav.Link>

          <NavDropdown
            className="links-item"
            title="Categories"
            id="basic-nav-dropdown"
          >
            {categories.map((category) => {
              return (
                <NavDropdown.Item key={category}>
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
