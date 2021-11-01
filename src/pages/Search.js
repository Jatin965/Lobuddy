import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import Loader from "../components/UI/Loader";
import ProductList from "../components/Cards/ProductList";

import CategoryHeader from "../components/Nav/CategoryHeader";
import SubHeader from "../components/Nav/SubHeader";
import SearchHeader from "../components/Nav/SearchHeader";

import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions/productActions";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [flag, setFlag] = useState(9);

  let keyword = history.location.search;

  let [key, word] = keyword.split("=");

  const { products, loading, error } = useSelector(
    (state) => state.productSearch
  );

  const moreHandler = () => {
    if (flag + 9 > products.length) {
      setFlag(products.length);
      let b = document.getElementById("more-btn");
      b.style.display = "none";
    } else {
      setFlag(flag + 9);
    }
  };

  useEffect(() => {
    dispatch(searchProducts(keyword));
  }, [keyword, dispatch, history.location.search]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="search">
      {key == "?name" ? (
        <SearchHeader word={word} len={products.length} />
      ) : key == "?sub" ? (
        <SubHeader word={word} cat={products[0].category} />
      ) : (
        <CategoryHeader word={word} />
      )}
      <ProductList products={products.slice(0, flag)} />

      <div className="down-sec">
        <p>
          You have seen {flag} of {products.length} products
        </p>
        <button id="more-btn" onClick={moreHandler}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Search;
