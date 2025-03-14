{
  /* The following line can be included in your src/index.js or App.js file */
}
import { CartProvider } from "./context/CartContext";
import { ToggleProvider } from "./context/ToggleContext";
import { MainRouter } from "./router/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ToggleProvider>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </ToggleProvider>
  );
}

export default App;
