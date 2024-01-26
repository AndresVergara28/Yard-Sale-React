import React, { useContext } from "react";
import "./MainContainer.scss";
import AddToCartButton from "./AddToCartButton";
import "./ItemCart.scss";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ product }) => {
  const {
    setProductInAside,
    asideProductDetail,
    asideShoppingCart,
    dropDownMenu,
  } = useContext(CartContext);
  const productChosen = {
    id: product.id,
    title: product.title,
    description: product.description,
    thumbnail: product.thumbnail,
    price: product.price,
    quantity: 1,
    total: product.price,
  };

  const openAsideProductDetail = (e) => {
    e.preventDefault();
    const isAsideShoppingCartOpened = asideShoppingCart.classList.contains(
      "dd-aside-shopping-cart"
    )
      ? false
      : true;

    const isDropDownMenuOpened = dropDownMenu.classList.contains("inactive")
      ? false
      : true;
    if (isAsideShoppingCartOpened || isDropDownMenuOpened) {
      dropDownMenu.classList.add("inactive");
      asideShoppingCart.classList.add("dd-aside-shopping-cart");
      setProductInAside(productChosen);
      asideProductDetail.classList.remove("dd-aside-description-product");
    } else {
      setProductInAside(productChosen);
      asideProductDetail.classList.remove("dd-aside-description-product");
    }
  };

  return (
    <div className="product-card" key={product.id}>
      <img
        className="product-cover-image"
        onClick={openAsideProductDetail}
        src={product.thumbnail}
        alt={`ImagenReferenciaProductos${product.id}`}
      />
      <div className="product-info">
        <div className="price-title-info">
          <p className="price-info">{"$" + product.price}</p>
          <p className="title-info">{product.title}</p>
        </div>

        <AddToCartButton product={productChosen} />
      </div>
    </div>
  );
};

export { ItemCart };
