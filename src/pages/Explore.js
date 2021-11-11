import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

import Loader from "../components/UI/Loader";
import ProductList from "../components/Cards/ProductList";
import ProductWidth from "../components/Cards/ProductWidth";

import samsung from "../assets/images/Explore/samsung.png";
import one from "../assets/images/Explore/one.png";
import apple from "../assets/images/Explore/apple.png";

const Explore = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  let key = history.location.search.split("=")[1];

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="explore" style={{ maxWidth: "90vw", margin: "auto" }}>
      <img
        style={{ maxWidth: "90vw", margin: "2vh auto" }}
        src={key === "samsung" ? samsung : key === "oneplus" ? one : apple}
        alt="Banner"
      />
      {window.innerWidth > 995 ? (
        <ProductList
          products={products.filter((ps) => ps.brand.toLowerCase() === key)}
        />
      ) : (
        products
          .filter((ps) => ps.brand.toLowerCase() === key)
          .map((product) => <ProductWidth product={product} />)
      )}
    </div>
  );
};

export default Explore;
