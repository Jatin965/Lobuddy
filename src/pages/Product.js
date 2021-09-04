import React, { useEffect } from "react";

import { useRouteMatch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { detailProduct } from "../redux/actions/productActions";

import Faq from "../components/UI/Faq";

const Product = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetail
  );
  useEffect(() => {
    dispatch(detailProduct(match.params.id));
  }, []);

  return (
    <div>
      <Faq />
    </div>
  );
};

export default Product;
