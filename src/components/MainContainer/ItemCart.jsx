import React, { useContext } from "react";
import "./MainContainer.scss";
import AddToCartButton from "./AddToCartButton";
import "./ItemCart.scss";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ product, key }) => {
  const { setProductInAside } = useContext(CartContext);

  const toggleAside = (e) => {
    e.preventDefault();
    setProductInAside({
      id: product.id,
      title: product.title,
      description: product.description,
      img: product.thumbnail,
      price: product.price,
    });

    const productDetailAside = document.querySelector("#productDetail");
    productDetailAside.classList.toggle("inactive");
  };
  return (
    <div className="product-card" key={key}>
      <img
        onClick={toggleAside}
        src={product.thumbnail}
        alt={`ImagenReferenciaProductos${product.id}`}
      />
      <div className="product-info">
        <div className="price-title-info">
          <p className="price-info">{"$" + product.price}</p>
          <p className="title-info">{product.title}</p>
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export { ItemCart };
