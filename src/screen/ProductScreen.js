import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;

  useEffect(() => {
    dispatch(detailProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <article className=".detail-container">
          <div className="detail-warpper">
            <div className="detail-card">
              <img className="detail-img" src={product.img} alt={product.alt} />
            </div>

            <div className="detail-card">
              <div className="detail-info">
                <ul>
                  <li>
                    <h1>{product.name}</h1>
                  </li>
                  <li className="detail-price">{product.price}</li>
                  <li>
                    Description:
                    <p>{product.desc}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="detail-card">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price:</div>
                      <div className="price">{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Quantity:</div>
                      <div className="input-wrap">
                        <input
                          className="input-box"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={addToCartHandler}
                      className="product-button block"
                    >
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default ProductScreen;
