import Navbar from "react-bootstrap/Navbar";
import MainLogo from "./logo_yard_sale.svg";
import { CartWidgetComponent } from "./CartWidgetComponent";
import "./NavBarComponent.scss";
import { Nav, NavDropdown } from "react-bootstrap";
import { useGetAllProducts,useGetProductsCategories } from "../../hooks/useProducts";

const NavBarComponent = () => {
  const {productsCategories} = useGetProductsCategories();
 /*  const categories = useGetProductsCategories();
  console.log(products);
  console.log(categories); */
  return (
    <div className="header-container">
      <Navbar className="navbar-container">
        <Navbar.Brand className="nav-brand">
          <img src={MainLogo} alt="MainLogo" />
        </Navbar.Brand>
        <Nav className="nav-links">
          <Nav.Link className="links-item" href="./">All</Nav.Link>
          <Nav.Link className="links-item">Products</Nav.Link>
          <NavDropdown
            className="links-item"
            title="Categories"
            id="basic-nav-dropdown"
          >

            {productsCategories.map((category)=>{
              return(

                <NavDropdown.Item href={`${category}`} key={category}>{category}</NavDropdown.Item>
              );
            })}

            
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className="nav-login">
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export  {NavBarComponent};