import React, { useContext } from "react";
import IconClose from "../../icons/icon_close.png";
import AddToCartLogo from "../../icons/bt_add_to_cart.svg";
import "./AsideItemDetail.scss";
import { CartContext } from "../../context/CartContext";

const AsideItemDetail = () => {
  const { productInAside, addToCartFunction } = useContext(CartContext);

  const closeAsideDetail = (e) => {
    e.preventDefault();
    const asideProductDetail = document.querySelector("#productDetail");
    const isAsideOpen = asideProductDetail.classList.contains(
      "dd-aside-description-product"
    );
    if (!isAsideOpen) {
      asideProductDetail.classList.add("dd-aside-description-product");
    }
  };

  return (
    <aside id="productDetail" className="dd-aside-description-product">
      <div
        className="product-detail-close close-product-details-button"
        onClick={closeAsideDetail}
      >
        <img src={IconClose} alt="icon-close-detail-aside" />
      </div>
      <img
        className="product-image"
        src={productInAside.thumbnail}
        alt="LogoImage"
      />

      <div className="product-info">
        <p className="product-info-price"> ${productInAside.price}</p>
        <p className="product-info-title">{productInAside.title}</p>
        <p className="product-info-description">{productInAside.description}</p>
        <button
          className="primary-button"
          onClick={() => addToCartFunction(productInAside)}
        >
          <img src={AddToCartLogo} alt="add-to-cart-logo" />
          <div>
            <p>Add to Cart</p>
          </div>
        </button>
      </div>
    </aside>
  );
};

export { AsideItemDetail };
