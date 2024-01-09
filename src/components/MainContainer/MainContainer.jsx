import React from "react";
import "./MainContainer.scss";
import AddToCartButton from "./AddToCartButton";

const MainContainer = ({ productsData }) => {


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

                <AddToCartButton product={product} />
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
