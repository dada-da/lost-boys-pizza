import React from "react";
import { Link } from "react-router-dom";

const SeeMoreButton = () => {
  return (
    <Link className="see-more" to="/menu">
      <div className="seemore-container">
        <div className="product-warpper">
          <button className="feature-button see-more">See More</button>
        </div>
      </div>
    </Link>
  );
};

export default SeeMoreButton;
