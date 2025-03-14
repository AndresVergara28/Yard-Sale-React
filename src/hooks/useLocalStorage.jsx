export const useInitializeLocalStorage = () => {
  const cartInLocalStorage = localStorage.getItem("cart");

  let parsedCart;

  if (!cartInLocalStorage) {
    localStorage.setItem("cart", JSON.stringify({}));
  } else {
    parsedCart = JSON.parse(cartInLocalStorage);
  }
};
