import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

import close from "../../assets/images/close.png";

const SearchView = ({ cls }) => {
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
      />

      <img
        className="close"
        onClick={() => cls(false)}
        src={close}
        alt="close"
      />

      {filterProducts.length != 0 && (
        <div className="dataResult">
          {filterProducts.map((value, key) => {
            return (
              <Link
                key={key}
                to={`/product/${value.id}`}
                onClick={() => {
                  setKey("");
                  setFilterProducts([]);
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