import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import Product from "../components/Cards/Product";
import Loader from "../components/UI/Loader";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

const Search = ({ keyss }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  let keyword = history.location.search;

  const [keys, word] = keyword.split("=");

  const key = keys.slice(1, 100);

  console.log(key);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [keyword, dispatch, history.location.search]);
  // console.log(products[0].category);
  if (loading) {
    return <Loader />;
  }

  console.log(products);
  return (
    <div className="search">
      {products
        .filter((ps) =>
          key === "category" ? (
            ps.category.toLowerCase() === word
          ) : key === "sub" ? (
            ps.sub.toLowerCase() === word
          ) : (
            <h1>Error</h1>
          )
        )
        .slice(0, 5)
        .map((product) => (
          <Product product={product} />
        ))}
    </div>
  );
};

export default Search;
