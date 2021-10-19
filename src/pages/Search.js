import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import Loader from "../components/UI/Loader";
import ProductList from "../components/Cards/ProductList";

import CategoryHeader from "../components/Nav/CategoryHeader";
import SubHeader from "../components/Nav/SubHeader";
import SearchHeader from "../components/Nav/SearchHeader";

import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions/productActions";

const Search = ({ keyss }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  let keyword = history.location.search;

  const { products, loading, error } = useSelector(
    (state) => state.productSearch
  );

  let [key, word] = keyword.split("=");

  console.log(products.length);

  useEffect(() => {
    dispatch(searchProducts(keyword));
  }, [keyword, dispatch, history.location.search]);

  if (loading) {
    return <Loader />;
  }

  console.log(products);
  return (
    <div className="search">
      {key == "?name" ? (
        <SearchHeader word={word} len={products.length} />
      ) : key == "?sub" ? (
        <SubHeader word={word} cat={products[0].category} />
      ) : (
        <CategoryHeader word={word} />
      )}
      <ProductList products={products} />
    </div>
  );
};

export default Search;
