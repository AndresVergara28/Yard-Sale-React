import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarComponent } from "../components/NavBarComponent/NavBarComponent";
import {All} from "../pages/All";


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent/>
      <Routes>
        <Route path="/" element={<All/>} />
      </Routes>
    </BrowserRouter>
  );
};
