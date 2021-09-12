import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <header>
      <nav className="nav-bar row">
        <h1 className="nav-bar-title">
          <Link to="/">Lost Boys Pizza</Link>
        </h1>
        <div>
          <Link to="/cart" className="nav-bar-link">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          <Link to="/menu" className="nav-bar-link">
            Full Menu
          </Link>
          <a
            href="https://www.google.com/maps/place/Lost+Boys+Pizza+Camden/@51.5336039,-0.1378751,15z/data=!4m5!3m4!1s0x0:0x9e9cf7ac30c9cc68!8m2!3d51.5336166!4d-0.1378454"
            target="_blank"
            className="nav-bar-link"
            rel="noreferrer noopener"
          >
            Come with Us
          </a>
          <Link to="/signin" className="nav-bar-link">
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
