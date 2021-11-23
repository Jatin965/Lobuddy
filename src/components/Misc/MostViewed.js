import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { mostViewProducts } from "../../redux/actions/productActions";
import Product from "../Cards/Product";
import Loader from "../UI/Loader";

const MostViewed = () => {
  const dispatch = useDispatch();

  const { mProducts, loading, error } = useSelector((state) => state.mostView);

  useEffect(() => {
    dispatch(mostViewProducts());
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div
      className="home-most"
      style={{ boxShadow: "none", padding: " 0", marginTop: 50 }}
    >
      <h3>Most Viewed</h3>
      <div className="scrolling-wrapper">
        {mProducts.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default MostViewed;
