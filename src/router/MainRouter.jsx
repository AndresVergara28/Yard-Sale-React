import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarComponent } from "../components/NavBarComponent/NavBarComponent";
import { All } from "../pages/All";
import { ProductsByCategory } from "../pages/ProductsByCategory";
import { AsideItemDetail } from "../components/AsideItemDetail/AsideItemDetail";
import { AsideShopping } from "../components/AsideShopping/AsideShopping";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<All />} />
        <Route
          path="/products/category/:category"
          element={<ProductsByCategory />}
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <AsideItemDetail />
      <AsideShopping />
    </BrowserRouter>
  );
};
