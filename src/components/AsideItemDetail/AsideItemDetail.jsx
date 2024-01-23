import React, { useContext } from "react";
import IconClose from "../../icons/icon_close.png";
import AddToCartLogo from "../../icons/bt_add_to_cart.svg";
import "./AsideItemDetail.scss";
import { CartContext } from "../../context/CartContext";

const AsideItemDetail = () => {
  const {
    productInAside,
    setProductInAside,
    addToCartFunction,
    asideProductDetail,
  } = useContext(CartContext);

  const closeAsideDetail = (e) => {
    e.preventDefault();
    const isAsideOpen = asideProductDetail.classList.contains(
      "dd-aside-description-product"
    );
    if (!isAsideOpen) {
      asideProductDetail.classList.add("dd-aside-description-product");
    }
  };

  const addOne = (e) => {
    e.preventDefault();
    setProductInAside({
      ...productInAside,
      quantity: productInAside.quantity + 1,
      total: productInAside.total + productInAside.price,
    });
  };

  const remOne = (e) => {
    e.preventDefault();
    if (productInAside.quantity > 1) {
      setProductInAside({
        ...productInAside,
        quantity: productInAside.quantity - 1,
        total: productInAside.total - productInAside.price,
      });
    }
  };

  return (
    <aside id="productDetail" className="item-detail-container dd-aside-description-product">
      <div className="product-cover">
        <div
          className="close-button close-product-details-button"
          onClick={closeAsideDetail}
        >
          <img src={IconClose} alt="icon-close-detail-aside" />
        </div>

        <img
          className="product-image"
          src={productInAside.thumbnail}
          alt="LogoImage"
        />
      </div>

      <div className="product-info">
        <div className="product-info-first-line">
          <p className="product-info-title">{productInAside.title}</p>
          <p className="product-info-price"> ${productInAside.price} / u</p>
        </div>
        <p className="product-info-description">{productInAside.description}</p>
      </div>

      <div className="product-checkout">
        <div className="modify-product">
          <p className="button-modify-quantity" onClick={remOne}>
            {" "}
            -{" "}
          </p>
          <p className="quantity-value">{productInAside.quantity}</p>
          <p className="button-modify-quantity" onClick={addOne}>
            {" "}
            +{" "}
          </p>
        </div>

        <button
          className="add-product"
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
