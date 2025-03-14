import React, { useContext } from "react";
import "../MainContainer/MainContainer.scss";
import AddToCartButton from "../AddToCartButton.jsx/AddToCartButton";
import "./ItemCart.scss";
import { CartContext } from "../../context/CartContext";
import { ToggleContext } from "../../context/ToggleContext";

const ItemCart = ({ product }) => {
  const {
    productDetailAside,
    setProductInDetailAside,
    toggleProductDetailAside,
    setCartAside,
  } = useContext(ToggleContext);

  const productChosen = {
    id: product.id,
    title: product.title,
    description: product.description,
    thumbnail: product.thumbnail,
    price: product.price,
    quantity: 1,
    total: product.price,
  };

  return (
    <div className="product-card" key={product.id}>
      <img
        className="product-cover-image"
        onClick={() => {
          if (productDetailAside) {
            setProductInDetailAside(productChosen);
            setCartAside(false);
          } else {
            setProductInDetailAside(productChosen);

            toggleProductDetailAside();
          }
        }}
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
