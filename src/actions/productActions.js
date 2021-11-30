import Axios from 'axios';
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
} from '../constants/productConstants';

export const listPizza = () => async (dispatch) => {
  dispatch({
    type: PIZZA_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      'https://warm-sierra-17869.herokuapp.com/api/products'
    );
    dispatch({
      type: PIZZA_LIST_SUCCESS,
      payload: data.filter((product) => product.type === 'pizza'),
    });
  } catch (error) {
    dispatch({ type: PIZZA_LIST_FAIL, payload: error.message });
  }
};

export const listSweet = () => async (dispatch) => {
  dispatch({
    type: SWEET_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      'https://warm-sierra-17869.herokuapp.com/api/products'
    );
    dispatch({
      type: SWEET_LIST_SUCCESS,
      payload: data.filter((product) => product.type === 'sweet'),
    });
  } catch (error) {
    dispatch({ type: SWEET_LIST_FAIL, payload: error.message });
  }
};

export const detailProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAIL_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(
      `https://warm-sierra-17869.herokuapp.com/api/products/${productId}`
    );
    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
