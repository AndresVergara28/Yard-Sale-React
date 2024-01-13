import React, { useContext } from "react";
import IconClose from "../../icons/icon_close.png";
import AddToCartLogo from "../../icons/bt_add_to_cart.svg";
import "./AsideItemDetail.scss";
import { CartContext } from "../../context/CartContext";

const AsideItemDetail = () => {
  const { productInAside } = useContext(CartContext);
  console.log(productInAside);

  const toggleAside = (e) => {
    e.preventDefault();
    const productDetailAside = document.querySelector("#productDetail");
    productDetailAside.classList.toggle("inactive");
  };

  return (
    <aside id="productDetail">
      <div
        className="product-detail-close close-product-details-button"
        onClick={toggleAside}
      >
        <img src={IconClose} alt="icon-close-detail-aside" />
      </div>
      <img className="product-image" src={productInAside.img} alt="LogoImage" />

      <div className="product-info">
        <p className="product-info-price"> {productInAside.price} $</p>
        <p className="product-info-title">{productInAside.title}</p>
        <p className="product-info-description">{productInAside.description}</p>
        <button className="primary-button">
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
