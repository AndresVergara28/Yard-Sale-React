import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContainer from "../components/MainContainer/MainContainer";
import { useGetProductsByCategory } from "../hooks/useProducts";

const ProductsByCategory = () => {
  const { category } = useParams();
  const { productsData } = useGetProductsByCategory(category);

  return <MainContainer productsData={productsData} />;
};

export { ProductsByCategory };
