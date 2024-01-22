import React, { useContext } from "react";
import "./CheckoutComponent.scss";
import { CartContext } from "../../context/CartContext";
import ShoppingCartItem from "./ShoppingCartItem";

const CheckoutComponent = () => {
  const { cart } = useContext(CartContext);
  return (
    <main className="container-fluid">
      <section className="row resumen-compras-container">
        <div className="col-lg-7 col-md-12 payment-summary">
          <h1 className="payment-summary-title">finalizar compra</h1>
          <form action="" className="form">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <label for="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  autoComplete="cc-given-name"
                  required
                />
              </label>
              <label for="family-name">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Apellido"
                  autoComplete="family-name"
                  required
                />
              </label>
              <label for="phone">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+57 (320)-345-5678"
                  autoComplete="tel"
                  required
                />
              </label>
              <label for="email" className="email-label">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="alguien123@ejemplo.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <div className="delivery-info">
              <h2>Información de envío</h2>
              <label for="departamento">
                <input
                  type="text"
                  name="departamento"
                  id="departamento"
                  placeholder="Atlantico"
                  autoComplete="country-name"
                  required
                />
              </label>
              <label for="address" className="direccion-envio">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Cra 1 # 3-50"
                />
              </label>
            </div>

            <div className="payment-method">
              <h2>Método de pago</h2>
              <label for="creditCard">
                <input type="radio" name="payment-type" id="creditCard" />
                <span>Credit Card</span>
              </label>
              <label for="debitCard">
                <input type="radio" name="payment-type" id="debitCard" />
                <span>Debit Card</span>
              </label>
            </div>

            <div className="buttons-info">
              <input className="button-to-pay" type="submit" value="PAGAR" id="pagar-btn" />
              <input className="button-to-reset" type="reset" value="LIMPIAR" id="reset-btn" />
            </div>
          </form>
        </div>

        <aside className="col-lg-5 col-md-12 purchase-summary">
            <h3 className="purchase-summary-title">Resumen de articulos</h3>
          <div className="products-section-container" id="carrito-de-compras">
            {
              cart.map((el) => {
                return <ShoppingCartItem key={el.id} product={el} />;
              }) /* Tu contenido de productos aquí */
            }
          </div>

          <div className="purchase-checkout">
            <div className="discount-container">
              <label for="coupon" className="discount-label">
                <input
                className="discount-input"
                  type="text"
                  name="nombre"
                  id="coupon"
                  placeholder="Codigo de descuento"
                />
                <button className="discount-button">APLICAR</button>
              </label>
            </div>
            <div className="purchase-total">
              <p className="total-title">TOTAL</p>
              <p className="total-valor" id="total_display">
                ${cart.reduce((acumulador, el) => acumulador + el.total, 0)}
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default CheckoutComponent;