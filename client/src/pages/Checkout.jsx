// eslint-disable-next-line no-unused-vars
import React from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart } = useCart();

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length > 0 ? (
        <ul className="checkout-list">
          {cart.map((product, index) => (
            <li key={index} className="checkout-item">
              <img
                src={product.image}
                alt={product.name}
                className="checkout-image"
              />
              <div className="checkout-details">
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Checkout;
