import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

import close from "../../assets/images/close.png";

const SearchView = ({ cls, vs }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [filterProducts, setFilterProducts] = useState([]);
  const [key, setKey] = useState("");
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  const handleChange = (e) => {
    setKey(e.target.value);
    if (e.target.value === "") {
      setFilterProducts([]);
    } else {
      setFilterProducts(
        products.filter((ps) =>
          ps.name.toLowerCase().includes(key.toLowerCase())
        )
      );
    }
  };
  return (
    <div className="search-modal">
      <input
        type="text"
        placeholder="Search for product, brands and more..."
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            history.push(`/search?name=${e.target.value}`);
            setFilterProducts([]);
            setKey("");
            cls(false);
            vs(false);
          }
        }}
      />

      <img
        className="close"
        onClick={() => {
          cls(false);
          vs(false);
        }}
        src={close}
        alt="close"
      />

      {filterProducts.length != 0 ? (
        <div className="dataResult">
          {filterProducts.map((value, key) => {
            return (
              <Link
                key={key}
                to={`/product/${value.id}`}
                onClick={() => {
                  setKey("");
                  setFilterProducts([]);
                  cls(false);
                  vs(false);
                }}
                className="dataItem"
              >
                <img src={value.image[0]} alt="" />
                <p>{value.name.slice(0, 30)}... </p>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="dataResult">
          {products.slice(20, 30).map((value, key) => {
            return (
              <Link
                key={key}
                to={`/product/${value.id}`}
                onClick={() => {
                  setKey("");
                  setFilterProducts([]);
                  cls(false);
                  vs(false);
                }}
                className="dataItem"
              >
                <img src={value.image[0]} alt="" />
                <p>{value.name.slice(0, 30)}... </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchView;
