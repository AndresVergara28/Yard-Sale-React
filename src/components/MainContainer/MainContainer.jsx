import React from "react";
import "./MainContainer.scss";
import { ItemCart } from "../ItemCart/ItemCart";

const MainContainer = ({ productsData }) => {
  return (
    <>
      <section className="main-container">
        <div className="card-container">
          {productsData.map((product) => {
            return <ItemCart key={product.id} product={product} />;
          })}
        </div>
      </section>
    </>
  );
};

export default MainContainer;
