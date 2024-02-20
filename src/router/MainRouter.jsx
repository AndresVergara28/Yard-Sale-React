import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// pages
import { Home } from "../pages/Home";
import { All } from "../pages/All";
import { Checkout } from "../pages/Checkout";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

// components
import { NavBarComponent } from "../components/NavBarComponent/NavBarComponent";
import { ProductsByCategory } from "../pages/ProductsByCategory";
import { AsideItemDetail } from "../components/AsideItemDetail/AsideItemDetail";
import { AsideShopping } from "../components/AsideShopping/AsideShopping";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <AsideItemDetail />
      <AsideShopping />
    </BrowserRouter>
  );
};
