import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = ({ addToCart }) => {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
