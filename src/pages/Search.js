import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import Loader from "../components/UI/Loader";
import ProductList from "../components/Cards/ProductList";
import ProductWidth from "../components/Cards/ProductWidth";

import CategoryHeader from "../components/Nav/CategoryHeader";
import SubHeader from "../components/Nav/SubHeader";
import SearchHeader from "../components/Nav/SearchHeader";

import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions/productActions";

import { BsFilterLeft } from "react-icons/bs";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [flag, setFlag] = useState(9);
  const [visible, setVisible] = useState(false);
  const [fProducts, setFProducts] = useState([]);

  let keyword = history.location.search;
  let [key, word] = keyword.split("=");

  const { products, loading, error } = useSelector(
    (state) => state.productSearch
  );

  useEffect(() => {
    setFProducts(products);
    console.log("Run");
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
    setVisible(false);
    setFProducts(products);
  };

  const handleDeal = () => {
    setFlag(9);
    setVisible(false);
    setFProducts(products.filter((ps) => ps.tags.includes("deal")));
  };

  const handleTrend = () => {
    setFlag(9);
    setVisible(false);
    setFProducts(products.filter((ps) => ps.tags.includes("trendy")));
  };

  const handleCompare = (srt) => {
    if (srt === "lh") {
      const ps = [...products];
      ps.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
      setFProducts(ps);
      setFlag(9);
      setVisible(false);
    }
    if (srt === "hl") {
      const ps = [...products];
      ps.sort((a, b) => (a.price > b.price ? -1 : b.price > a.price ? 1 : 0));
      setFProducts(ps);
      setFlag(9);
      setVisible(false);
    }
  };

  useEffect(() => {
    dispatch(searchProducts(keyword));
  }, [keyword, dispatch, history.location.search]);

  if (loading || loading === undefined) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  console.log(fProducts);
  console.log(products);

  const mobSort = (
    <div className="mob-sort">
      <h5>Sort by </h5>
      <hr />

      <div className="bag">
        <p>Relevance</p>
        <input onClick={handleRel} type="radio" />
      </div>

      <div className="bag">
        <p>Trendy</p>
        <input onClick={handleTrend} type="radio" />
      </div>

      <div className="bag">
        <p>Deals</p>
        <input onClick={handleDeal} type="radio" />
      </div>

      <div className="bag">
        <p>Price - Low to High</p>
        <input onClick={() => handleCompare("lh")} type="radio" />
      </div>

      <div className="bag">
        <p>Price - High to Low</p>
        <input onClick={() => handleCompare("hl")} type="radio" />
      </div>
    </div>
  );

  return (
    <div className="search">
      {visible && (
        <div className="backdrop" onClick={() => setVisible(false)}></div>
      )}
      {visible && mobSort}
      {key == "?name" ? (
        <SearchHeader word={word} len={fProducts.length} />
      ) : key == "?sub" ? (
        <SubHeader word={word} cat={products[0].category} />
      ) : (
        <CategoryHeader word={word} />
      )}

      {key == "?name" && (
        <div className="search-option">
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
          <div className="sort-mob">
            <BsFilterLeft
              onClick={() => setVisible(true)}
              style={{
                color: "#f68a1e",
                fontSize: 30,
                display: "inline-block",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      )}

      {/* <ProductList products={fProducts.slice(0, flag)} /> */}

      {window.innerWidth > 500 ? (
        <ProductList products={fProducts.slice(0, flag)} />
      ) : (
        fProducts
          .slice(0, flag)
          .map((product) => <ProductWidth product={product} />)
      )}

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
