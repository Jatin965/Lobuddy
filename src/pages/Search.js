import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

const Search = ({ key }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  let keyword = history.location.search;

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [keyword, dispatch, history.location.pathname]);

  console.log(products);
  return (
    <div>
      <h1>Searched Results!!!</h1>
    </div>
  );
};

export default Search;
