import axios from "axios";

/**
 * @name getProducts
 * @description  Get product from djuming products
 * @param {number} limit   
 * @returns {Promise}
 */

export async function getProducts(limit=100) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getProductsCategories() {
    return await axios.get(`https://dummyjson.com/products/categories`)
}

export async function getProductsByCategory(category) {
    return await axios.get(`https://dummyjson.com/products/category/${category}`)
}