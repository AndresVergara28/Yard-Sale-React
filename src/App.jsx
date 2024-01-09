{
  /* The following line can be included in your src/index.js or App.js file */
}
import { CartProvider } from "./context/CartContext";
import { MainRouter } from "./router/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <MainRouter />
    </CartProvider>
  );
}

export default App;
