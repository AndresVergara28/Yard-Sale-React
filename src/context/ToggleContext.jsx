import React, { createContext, useState } from "react";

const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [productDetailAside, setProductDetailAside] = useState(false);
  const [productInDetailAside, setProductInDetailAside] = useState({});
  const [cartAside, setCartAside] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [dropDownUserMenu, setDropDownUserMenu] = useState(false);

  const toggleCartAside = () => {
    if (!cartAside) {
      setCartAside(true);
    } else {
      setCartAside(false);
    }
  };

  const toggleProductDetailAside = () => {
    if (!productDetailAside) {
      setProductDetailAside(true);
      setCartAside(false);
    } else {
      setProductDetailAside(false);
    }
  };
  return (
    <ToggleContext.Provider
      value={{
        productDetailAside,
        productInDetailAside,
        cartAside,
        dropDownMenu,
        dropDownUserMenu,
        setProductDetailAside,
        setProductInDetailAside,
        setDropDownMenu,
        setCartAside,
        setDropDownUserMenu,
        toggleCartAside,
        toggleProductDetailAside,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export { ToggleContext, ToggleProvider };
