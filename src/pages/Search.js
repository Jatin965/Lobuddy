import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import Product from "../components/Cards/Product";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

const Search = ({ key }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  let keyword = history.location.search;

  console.log(keyword);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [keyword, dispatch, history.location.pathname]);

  console.log(products);
  return (
    <div className="search">
      {products
        .filter((ps) => ps.category === "Laptop")
        .slice(0, 5)
        .map((product) => (
          <Product product={product} />
        ))}
    </div>
  );
};

export default Search;
