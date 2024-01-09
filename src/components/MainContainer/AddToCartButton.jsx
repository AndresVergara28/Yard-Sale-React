import { useContext } from "react";
import AddToCartLogo from "../../icons/bt_add_to_cart.svg";
import { CartContext } from "../../context/CartContext";

const AddToCartButton = ({ product }) => {
  const { cart, setCart, setQuantityCart } = useContext(CartContext);

  function getIndexInCart(el) {
    for (let i = 0; i < cart.length; i++) {
      const codigo = cart[i].codigo;
      if (codigo === el.codigo) {
        return i;
      }
    }
  }

  function addProductToCart() {
    const isProductInCart = cart.find((el) => el.id === product.id)
      ? true
      : false;

    if (!isProductInCart) {
      const item = {
        id: product.id,
        title: product.title,
        description: product.description,
        quantity: 1,
        price: product.price,
      };
      cart.push(item);
      setQuantityCart(cart.length);
    } else {
      const position = getIndexInCart(product);
      cart[position].quantity++;
      console.log(cart[position].quantity);
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
