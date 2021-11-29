import React from "react";
import { Link, useHistory } from "react-router-dom";

const Product = ({ heading, data }) => {
  const history = useHistory();
  return (
    <div className="product-container">
      <h1 className="product-heading">{heading}</h1>
      <div className="product-warpper">
        {data
          ? data.map((product) => {
              return (
                <div className="product-card" key={product._id}>
                  <Link to={`/api/products/${product._id}`}>
                    <img
                      className="product-img"
                      src={product.img}
                      alt={product.alt}
                    />
                  </Link>

                  <div className="product-info">
                    <Link
                      to={`/api/products/${product._id}`}
                      className="product-title"
                    >
                      <h2 className="product-title"> {product.name}</h2>
                    </Link>
                    <p className="product-price">${product.price}</p>
                    <button
                      onClick={() =>
                        history.push(`/cart/${product._id}?qty=${1}`, {
                          from: "CartScreen",
                        })
                      }
                      className="product-button block"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
};

export default Product;
