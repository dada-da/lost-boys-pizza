import React, { useEffect } from "react";
import Product from "../components/Product";
import Feature from "../components/Feature";
import Billboards from "../components/Billboards";
import { useDispatch, useSelector } from "react-redux";
import { listPizza, listSweet } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import SeeMoreButton from "../components/SeeMoreButton";

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
      <Billboards></Billboards>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <Product
          data={products.slice(1, 7)}
          heading={"Choose your Favourite"}
        ></Product>
      )}

      <SeeMoreButton></SeeMoreButton>

      <Feature></Feature>

      {loadingSweet ? (
        <LoadingBox></LoadingBox>
      ) : errorSweet ? (
        <MessageBox variant="danger">{errorSweet}</MessageBox>
      ) : (
        <Product
          data={sweet.slice(1, 7)}
          heading={"Sweet Treats for You"}
        ></Product>
      )}

      <SeeMoreButton></SeeMoreButton>
    </>
  );
}

export default HomeScreen;
