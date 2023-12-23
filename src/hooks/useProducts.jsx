import { useEffect, useState } from "react";
import { getProducts, getProductsCategories } from "../services/productService";
 

export const useGetAllProducts = () =>{
    const [productsData,setProductsData] = useState([]);
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            setProductsData(res.data.products);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return {productsData};
};

export const useGetProductsCategories = () =>{
    const [productsCategories, setProductsCategories] = useState([]);
    useEffect(()=>{
        getProductsCategories()
        .then((res)=>{
            setProductsCategories(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return {productsCategories}
}