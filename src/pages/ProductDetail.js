import React, { useEffect } from "react";

import { useRouteMatch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { detailProduct, listProducts } from "../redux/actions/productActions";

import Faq from "../components/UI/Faq";
import Product from "../components/Cards/Product";

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

  // if (loading || loadingDetail) {
  //   return <h1> Loading ...</h1>;
  // }

  if (error || errorDetail) {
    return <h1>Error</h1>;
  }

  return (
    <div className="detail">
      <Faq />

      <div className="most-products">
        {products.slice(10, 14).map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
