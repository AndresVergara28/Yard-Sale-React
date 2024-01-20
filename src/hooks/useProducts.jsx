import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/productService";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

export const useGetAllProducts = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    getDocs(productsCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);
  return { productsData };
};

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const { productsData } = useGetAllProducts();

  productsData.map((el) => {
    const category = el.category;
    const isCategoryInCategories = categories.find((el) => el === category)
      ? true
      : false;

    if (!isCategoryInCategories) {
      categories.push(category);
    }
  });
  console.log("me ejecuto");

  return { categories };
};

export const useGetProductsByCategory = (category) => {
  const { productsData } = useGetAllProducts();
  const [productsCategory, setProductsCategories] = useState([]);
  console.log(productsData);

  console.log(category);
  useEffect(() => {
    productsData.forEach((el) => {
      const verificacion = el.category;
      if (verificacion === category) {
        productsCategory.push(el);
      }
    });
  }, [category]);
  console.log(productsCategory);

  return { productsCategory };
};
