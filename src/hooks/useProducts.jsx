import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByCategory,
  getProductsCategories,
} from "../services/productService";

export const useGetAllProducts = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProductsData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { productsData };
};

export const useGetProductsCategories = () => {
  const [productsCategories, setProductsCategories] = useState([]);
  useEffect(() => {
    getProductsCategories()
      .then((res) => {
        setProductsCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { productsCategories };
};

export const useGetProductsByCategory = (category) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProductsByCategory(category)
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return { productsData };
};
