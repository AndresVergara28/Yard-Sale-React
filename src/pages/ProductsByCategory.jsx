import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../hooks/useProducts";
import MainContainer from "../components/MainContainer/MainContainer";

const ProductsByCategory = () => {
  const { category } = useParams();
  const { productsData } = useGetProductsByCategory(category);


  return <MainContainer productsData={productsData} />;
};

export { ProductsByCategory };
