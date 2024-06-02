import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
  addDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

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
      setCategories([...categories, category]);
    }
  });
  return { categories };
};



export const useCheckStatus = (user) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
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

export const useCreateOrder = (order) => {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  addDoc(ordersCollection, order);
};
