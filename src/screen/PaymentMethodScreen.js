import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("Banking");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="banking"
              value="Banking"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="banking">Internet Banking</label>
          </div>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="cash"
              value="Cash"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="cash">Cash</label>
          </div>
        </div>

        <div>
          <button className="primary signin-button" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
