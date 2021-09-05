import React, { useEffect } from "react";

import { useRouteMatch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { detailProduct, listProducts } from "../redux/actions/productActions";

import Faq from "../components/UI/Faq";
import Product from "../components/Cards/Product";

import Customer from "../assets/images/home/cus.png";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const {
    product,
    loading: loadingDetail,
    error: errorDetail,
  } = useSelector((state) => state.productDetail);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  console.log(product);
  console.log(products);

  useEffect(() => {
    dispatch(detailProduct(match.params.id));
    dispatch(listProducts());
  }, [dispatch]);

  if (loading || loadingDetail) {
    return <h1> Loading ...</h1>;
  }

  if (error || errorDetail) {
    return <h1>Error</h1>;
  }

  return (
    <div className="detail">
      <div className="detail-product">
        <h2>Product Details</h2>
        {product.description}
        <br />
        {product.details}
      </div>

      <div className="sec3">
        <div className="what">
          <h2>What you'll get in the box</h2>
          <div className="what-content"></div>
        </div>
        <Faq />
      </div>

      <div className="testimonials">
        <div className="content">
          <h1>Our happy customers</h1>
          <p>Check out what our customer saying about us</p>
        </div>
        <img src={Customer} alt="Customer" />
      </div>

      <div className="detail-most">
        <h1>Our best deals</h1>

        <div className="most-products">
          {products.slice(9, 13).map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
