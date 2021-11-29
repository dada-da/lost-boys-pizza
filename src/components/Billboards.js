import React from "react";
import { Link } from "react-router-dom";

function Billboards() {
  return (
    <div className="billboards-container">
      <div className="billboards-content">
        <div className="billboards-item">
          <h1>Greatest Pizza in Town</h1>
          <p>Ready in 60 seconds</p>
          <Link to="/menu">
            <button>Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Billboards;
