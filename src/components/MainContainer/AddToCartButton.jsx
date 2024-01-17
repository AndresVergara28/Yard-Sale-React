import { useContext } from "react";
import AddToCartLogo from "../../icons/bt_add_to_cart.svg";
import { CartContext } from "../../context/CartContext";

const AddToCartButton = ({ product }) => {
  const { cart, setCart, addToCartFunction } = useContext(CartContext);

  return (
    <figure>
      <img
        src={AddToCartLogo}
        alt="imagenReferencia"
        onClick={() => addToCartFunction(product)}
      />
    </figure>
  );
};

export default AddToCartButton;
