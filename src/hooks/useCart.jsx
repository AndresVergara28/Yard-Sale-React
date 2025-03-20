import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useCartActions = (
  setCartAside,
  setProductDetailAside,
  setCart
) => {
  const MySwal = withReactContent(Swal);

  function addToCartFunction(product) {
    const item = {
      id: product.id,
      title: product.title,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      img: product.thumbnail,
      total: product.total,
    };

    MySwal.fire({
      title: `${product.title} añadido`,
      icon: "success",
      width: "40rem",
      padding: "3em",
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      setCartAside(true);
      setProductDetailAside(false);

      setCart((prevCart) => {
        const isItemInCart = prevCart.find((el) => el.id === item.id)
          ? true
          : false;

        let newCart;
        if (isItemInCart) {
          newCart = prevCart.map((el) => {
            if (el.id === item.id) {
              return {
                ...el,
                quantity: el.quantity + product.quantity,
                total: el.total + product.total,
              };
            } else {
              return el;
            }
          });

          setCart(newCart);
          localStorage.setItem("cart", JSON.stringify(newCart));
        } else {
          newCart = [...prevCart];
          newCart.push(item);
          setCart(newCart);
          localStorage.setItem("cart", JSON.stringify(newCart));
        }
      });

      /*   if (isItemInCart) {
        const newCart = prevCart.map((el) => {
          if (el.id === item.id) {
            return {
              ...el,
              quantity: el.quantity + product.quantity,
              total: el.total + product.total,
            };
          } else {
            return el;
          }
        });
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        const newCart = [...prevCart];
        newCart.push(item);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } */
    });
  }

  return { addToCartFunction };
};
