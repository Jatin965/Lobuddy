import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

import Loader from "../components/UI/Loader";

const Explore = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  let key = history.location.search.split("=")[1];

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Explore</h1>
    </div>
  );
};

export default Explore;
