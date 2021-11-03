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
  const [fProducts, setFProducts] = useState([]);

  let keyword = history.location.search;
  let [key, word] = keyword.split("=");

  const { products, loading, error } = useSelector(
    (state) => state.productSearch
  );

  useEffect(() => {
    setFProducts(products);
  }, [loading, error]);

  const moreHandler = () => {
    if (flag + 9 > fProducts.length) {
      setFlag(fProducts.length);
      let b = document.getElementById("more-btn");
      b.style.display = "none";
    } else {
      setFlag(flag + 9);
    }
  };

  const handleRel = () => {
    setFlag(9);
    setFProducts(products);
  };

  const handleDeal = () => {
    setFlag(9);
    setFProducts(products.filter((ps) => ps.tags.includes("deal")));
  };

  const handleTrend = () => {
    setFlag(9);
    setFProducts(products.filter((ps) => ps.tags.includes("trendy")));
  };

  const handleCompare = (srt) => {
    if (srt === "lh") {
      const ps = [...products];
      ps.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
      setFProducts(ps);
      setFlag(9);
    }
    if (srt === "hl") {
      const ps = [...products];
      ps.sort((a, b) => (a.price > b.price ? -1 : b.price > a.price ? 1 : 0));
      setFProducts(ps);
      setFlag(9);
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

  console.log(fProducts);

  return (
    <div className="search">
      {key == "?name" ? (
        <SearchHeader word={word} len={fProducts.length} />
      ) : key == "?sub" ? (
        <SubHeader word={word} cat={fProducts[0].category} />
      ) : (
        <CategoryHeader word={word} />
      )}

      {key == "?name" && (
        <div className="search-sort">
          <h4>Sort By : </h4>
          <button id="rel" onClick={handleRel}>
            Relevance
          </button>
          <button onClick={handleTrend}>Trendy</button>
          <button onClick={handleDeal}>Deals</button>
          <button onClick={() => handleCompare("lh")}>
            Price - Low to High
          </button>
          <button onClick={() => handleCompare("hl")}>
            Price - High to Low
          </button>

          <hr />
        </div>
      )}

      <ProductList products={fProducts.slice(0, flag)} />

      <div className="down-sec">
        <p>
          You have seen {flag} of {fProducts.length} products
        </p>
        <button id="more-btn" onClick={moreHandler}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Search;
