import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.scss";
const CarouselComponent = ({ productsData }) => {
  return (
    <Carousel data-bs-theme="dark" className="carousel-container" fade>
      {
        productsData.map((el) => {
          return (
            <Carousel.Item
              key={el.id}
              interval={10000}
              className="carousel-item"
            >
              <img
                className="carousel-item-img d-block w-100"
                src={el.thumbnail}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-caption">
                <h5>{el.title}</h5>
                <p>{el.description}.</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        }) /* Tu contenido de productos aquí */
      }
    </Carousel>
  );
};

export default CarouselComponent;
