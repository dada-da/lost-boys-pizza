import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import {
  productDetailReducer,
  productListReducer,
  sweetListReducer,
} from "./reducers/productReducers";
import { UserRegisterReducer, UserSigninReducer } from "./reducers/userReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "Banking",
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  sweetList: sweetListReducer,
  cart: cartReducer,
  userSignin: UserSigninReducer,
  userRegister: UserRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
