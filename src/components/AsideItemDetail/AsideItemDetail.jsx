import React, { useContext } from "react";
import IconClose from "../../icons/icon_close.png";
import AddToCartLogo from "../../icons/bt_add_to_cart.svg";
import "./AsideItemDetail.scss";
import { CartContext } from "../../context/CartContext";
import { ToggleContext } from "../../context/ToggleContext";

const AsideItemDetail = () => {
  const { addToCartFunction } = useContext(CartContext);

  const {
    productInDetailAside,
    productDetailAside,

    setProductDetailAside,
    toggleProductDetailAside,
  } = useContext(ToggleContext);

  const closeAsideDetail = (e) => {
    e.preventDefault();
    const isAsideOpen = asideProductDetail.classList.contains(
      "dd-aside-description-product"
    );

    const isDropDownMenuOpen = dropDownMenu.classList.contains("inactive")
      ? false
      : true;

    if (!isAsideOpen) {
      asideProductDetail.classList.add("dd-aside-description-product");
    }
  };

  const addOne = (e) => {
    e.preventDefault();
    setProductInDetailAside({
      ...productInDetailAside,
      quantity: productInDetailAside.quantity + 1,
      total: productInDetailAside.total + productInDetailAside.price,
    });
  };

  const remOne = (e) => {
    e.preventDefault();
    if (productInDetailAside.quantity > 1) {
      setProductInDetailAside({
        ...productInDetailAside,
        quantity: productInDetailAside.quantity - 1,
        total: productInDetailAside.total - productInDetailAside.price,
      });
    }
  };

  return (
    <aside
      className={`${
        productDetailAside ? "" : "dd-aside-description-product"
      } item-detail-container `}
    >
      <div className="product-cover">
        <div
          className="close-button close-product-details-button"
          onClick={toggleProductDetailAside}
        >
          <img src={IconClose} alt="icon-close-detail-aside" />
        </div>

        <img
          className="product-image"
          src={productInDetailAside.thumbnail}
          alt="LogoImage"
        />
      </div>

      <div className="product-info">
        <div className="product-info-first-line">
          <p className="product-info-title">{productInDetailAside.title}</p>
          <p className="product-info-price">
            {" "}
            ${productInDetailAside.price} / u
          </p>
        </div>
        <p className="product-info-description">
          {productInDetailAside.description}
        </p>
      </div>

      <div className="product-checkout">
        <div className="modify-product">
          <p className="button-modify-quantity" onClick={remOne}>
            {" "}
            -{" "}
          </p>
          <p className="quantity-value">{productInDetailAside.quantity}</p>
          <p className="button-modify-quantity" onClick={addOne}>
            {" "}
            +{" "}
          </p>
        </div>

        <button
          className="add-product"
          onClick={() => addToCartFunction(productInDetailAside)}
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
