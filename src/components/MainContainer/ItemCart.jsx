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

    const isAsideProductClosed = asideProductDetail.classList.contains(
      "dd-aside-description-product"
    );
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains(
      "dd-aside-shopping-cart"
    );

    // primero verificamos que el aaside del carrito de compras se encuentre cerrado
    if (isAsideShoppingCartClosed) {
      // si se encuentra cerrado se verifica entonces que no este abierto el aside description del producto

      if (isAsideProductClosed) {
        // si el aside de descricion-producto esta cerrado, se redenriza
        setProductInAside(productChosen);
        asideProductDetail.classList.remove("dd-aside-description-product");
      } else {
        // si no se encuentra cerrado, entonces se actualiza el componente con la informacion de otro producto seleccionado
        setProductInAside(productChosen);
      }

      // si el aside del carrito de compras no se encuentra cerrado, se cierra y se renderiza el de descripcion-producto
    } else {
      setProductInAside(productChosen);
      asideShoppingCart.classList.add("dd-aside-shopping-cart");
      asideProductDetail.classList.remove("dd-aside-description-product");
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
