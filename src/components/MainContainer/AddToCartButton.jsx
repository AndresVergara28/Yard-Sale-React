import { useContext } from "react";
import AddToCartLogo from "../../icons/bt_add_to_cart.svg";
import { CartContext } from "../../context/CartContext";

const AddToCartButton = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const asideShoppingCart = document.querySelector("#shoppingCartContainer");
  const asideProductDetail = document.querySelector("#productDetail");
  function addProductToCart() {
    asideShoppingCart.classList.remove("dd-aside-shopping-cart");
    asideProductDetail.classList.add("dd-aside-description-product");
    const item = {
      id: product.id,
      title: product.title,
      description: product.description,
      quantity: 1,
      price: product.price,
      img: product.thumbnail,
      total: product.price,
    };

    const isItemInCart = cart.find((el) => el.id === item.id) ? true : false;

    if (isItemInCart) {
      const newCart = cart.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            quantity: el.quantity + 1,
            total: el.total + el.price,
          };
        } else {
          return el;
        }
      });
      setCart(newCart);
    } else {
      const newCart = [...cart];
      newCart.push(item);
      setCart(newCart);
    }
  }

  return (
    <figure>
      <img
        src={AddToCartLogo}
        alt="imagenReferencia"
        onClick={addProductToCart}
      />
    </figure>
  );
};

export default AddToCartButton;
