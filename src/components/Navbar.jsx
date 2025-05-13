import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-title">Sports Store</div>
      <div className="nav-links">
        <Link to="/">
          <button className="nav-button">Home</button>
        </Link>
        <Link to="/cart">
          <button className="nav-button">Cart ({cartCount})</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
