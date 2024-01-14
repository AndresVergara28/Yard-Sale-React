import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarComponent } from "../components/NavBarComponent/NavBarComponent";
import { All } from "../pages/All";
import { ProductsByCategory } from "../pages/ProductsByCategory";
import { AsideItemDetail } from "../components/AsideItemDetail/AsideItemDetail";
import { AsideShopping } from "../components/AsideShopping/AsideShopping";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/products" element={<All />} />
        <Route
          path="/products/category/:category"
          element={<ProductsByCategory />}
        />
      </Routes>
      <AsideItemDetail />
      <AsideShopping />
    </BrowserRouter>
  );
};
