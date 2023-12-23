import React from "react";
import { useGetAllProducts } from "../../hooks/useProducts";
import AddToCartLogo from "../../icons/bt_add_to_cart.svg";
import "./MainContainer.scss"

const MainContainer = () => {
  const { productsData } = useGetAllProducts();

  return (
    <section className="main-container">
      <div className="card-container">
        {productsData.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img
                src={product.thumbnail}
                alt={`ImagenReferenciaProductos${product.id}`}
              />
              <div className="product-info">
                <div className="price-title-info">
                  <p className="price-info">{"$" + product.price}</p>
                  <p className="title-info">{product.title}</p>
                </div>

                <figure>
                  <img src={AddToCartLogo} alt="" />
                </figure>
              </div>
            </div>
          );
        })}
        ,
      </div>
    </section>
  );
};

export default MainContainer;
