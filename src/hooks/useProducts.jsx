import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
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
  const { productsData } = useGetAllProducts();
  const [categories, setCategories] = useState([]);
  productsData.map((el) => {
    const category = el.category;
    const isCategoryInCategories = categories.find((el) => el === category)
      ? true
      : false;

    if (!isCategoryInCategories) {
      categories.push(category);
    }
  });
  return { categories };
};

export const useGetProductsByCategory = (category) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(
      collection(db, "products"),
      where("category", "==", category)
    );

    getDocs(q).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, [category]);

  return { productsData };
};
