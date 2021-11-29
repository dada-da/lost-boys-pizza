import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SuccessScreen = (props) => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const countDown = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    setTimeout(() => {
      props.history.push("/");
    }, 6000);
    return () => clearInterval(countDown);
  });

  return (
    <div className="alert success">
      <h1>Order Success</h1>
      <Link to="/" className="btn">
        Back to Home after {timer} second
      </Link>
    </div>
  );
};

export default SuccessScreen;
