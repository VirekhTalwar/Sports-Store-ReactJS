import React from "react";
import "./cart.css";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : null}
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <div>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
          </div>
          <button className="cart-button" onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}
      <h3 className="cart-total">Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
