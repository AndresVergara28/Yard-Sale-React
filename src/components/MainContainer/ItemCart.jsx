import React, { useContext } from "react";
import "./MainContainer.scss";
import AddToCartButton from "./AddToCartButton";
import "./ItemCart.scss";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ product, key }) => {
  const { setProductInAside } = useContext(CartContext);

  const openAsideProductDetail = (e) => {
    e.preventDefault();
    const asideProductDetail = document.querySelector("#productDetail");
    const asideShoppingCart = document.querySelector("#shoppingCartContainer");
    const productChosen = {
      id: product.id,
      title: product.title,
      description: product.description,
      img: product.thumbnail,
      price: product.price,
    };

    const isAsideProductOpen =
      asideProductDetail.classList.contains("inactive");
    const isAsideShoppingCartOpen = asideShoppingCart.classList.contains("inactive");

    if (isAsideShoppingCartOpen) {
      if (isAsideProductOpen) {
        // Cuando esta cerrado el asideDetailProduct
        console.log("Estoy cerrado");
        setProductInAside(productChosen);

        asideProductDetail.classList.remove("inactive");
      } else {
        // Cuando esta abierto el asideDetailProduct
        setProductInAside(productChosen);
      }
    } else {
      setProductInAside(productChosen);
      asideShoppingCart.classList.add("inactive");
      asideProductDetail.classList.remove("inactive");
    }
  };
  return (
    <div className="product-card" key={key}>
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

        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export { ItemCart };
