import {
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PIZZA_LIST_FAIL,
  PIZZA_LIST_REQUEST,
  PIZZA_LIST_SUCCESS,
  SWEET_LIST_FAIL,
  SWEET_LIST_REQUEST,
  SWEET_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PIZZA_LIST_REQUEST:
      return { loading: true };
    case PIZZA_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PIZZA_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sweetListReducer = (state = { sweet: [] }, action) => {
  switch (action.type) {
    case SWEET_LIST_REQUEST:
      return { loadingSweet: true };
    case SWEET_LIST_SUCCESS:
      return { loadingSweet: false, sweet: action.payload };
    case SWEET_LIST_FAIL:
      return { loadingSweet: false, errorSweet: action.payload };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
