import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import Loader from "../components/UI/Loader";
import ProductList from "../components/Cards/ProductList";

import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions/productActions";

const Search = ({ keyss }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  let keyword = history.location.search;

  const { products, loading, error } = useSelector(
    (state) => state.productSearch
  );

  console.log(products);

  useEffect(() => {
    dispatch(searchProducts(keyword));
  }, [keyword, dispatch, history.location.search]);

  if (loading) {
    return <Loader />;
  }

  console.log(products);
  return (
    <div className="search">
      <ProductList products={products} />
    </div>
  );
};

export default Search;
