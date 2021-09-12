import React, { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listPizza, listSweet } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const sweetList = useSelector((state) => state.sweetList);
  const { loading, error, products } = productList;
  const { loadingSweet, errorSweet, sweet } = sweetList;

  useEffect(() => {
    dispatch(listPizza());
    dispatch(listSweet());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <Product data={products} heading={"PIZZA"}></Product>
      )}

      {loadingSweet ? (
        <LoadingBox></LoadingBox>
      ) : errorSweet ? (
        <MessageBox variant="danger">{errorSweet}</MessageBox>
      ) : (
        <Product data={sweet} heading={"DESSERT"}></Product>
      )}
    </>
  );
}

export default HomeScreen;
