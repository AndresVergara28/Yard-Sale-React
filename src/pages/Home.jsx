import CarouselComponent from "../components/CarouselComponent/CarouselComponent";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { productsData } = useContext(CartContext);

  return <CarouselComponent productsData={productsData}/>;
};

export default Home;
