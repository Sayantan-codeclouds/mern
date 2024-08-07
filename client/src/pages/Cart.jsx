// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="checkout-container">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <>
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
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button
              className="checkout-button"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
