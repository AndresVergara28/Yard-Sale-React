import { useContext } from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import { CartContext } from "../context/CartContext";

const All = () => {
  const { productsData } = useContext(CartContext);

  return <MainContainer productsData={productsData} />;
};

export { All };
