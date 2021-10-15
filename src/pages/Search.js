import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import Product from "../components/Cards/Product";
import Loader from "../components/UI/Loader";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

const Search = ({ keyss }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [pro, setPro] = useState([]);

  let keyword = history.location.search;

  const [keys, word] = keyword.split("=");

  const key = keys.slice(1, 100);

  console.log(key);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  // if (key === "category") {
  //   setPro(products.filter((ps) => ps.category.toLowerCase() === word));
  // }

  // if (key === "sub") {
  //   setPro(products.filter((ps) => ps.sub.toLowerCase() == word));
  // }

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
      {pro
        .filter((ps) => ps.category === word)
        .map((product) => {
          return <Product product={product} />;
        })}
    </div>
  );
};

export default Search;
