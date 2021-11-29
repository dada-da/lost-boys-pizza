import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [tel, setTel] = useState(shippingAddress.tel);
  const [address, setAddress] = useState(shippingAddress.address);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ fullName, address, tel }));
    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            className="signin-input"
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fullName">Telephone</label>
          <input
            className="signin-input"
            type="tel"
            id="tel"
            placeholder="Enter telephone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fullName">Address</label>
          <input
            className="signin-input"
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            <button className="primary signin-button" type="submit">
              Continue
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}
