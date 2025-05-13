import React from "react";
import "./productCard.css"; // Import CSS

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img className="product-image" src={product.image} alt={product.name} />
      <p>Price: ₹{product.price}</p>
      <button className="product-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
