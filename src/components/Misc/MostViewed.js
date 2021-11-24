import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { mostViewProducts } from "../../redux/actions/productActions";
import Product from "../Cards/Product";
import Loader from "../UI/Loader";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const MostViewed = () => {
  const dispatch = useDispatch();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentMargin, setCurrentMargin] = useState(0);

  // let currentPosition = 0;
  // let currentMargin = 0;

  const slideRight = () => {
    if (currentPosition != 0) {
      document.getElementById("slider").style.marginLeft =
        currentMargin + 100 + "%";
      // currentMargin += 100 / 8;
      setCurrentMargin((prev) => prev + 100);
      setCurrentPosition((prev) => prev - 1);
    }
  };

  const slideLeft = () => {
    if (currentPosition != 1) {
      document.getElementById("slider").style.marginLeft =
        currentMargin - 100 + "%";
      // currentMargin += 100 / 8;
      setCurrentMargin((prev) => prev - 100);
      setCurrentPosition((prev) => prev + 1);
    }
  };

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
      <div id="container">
        <div className="scrolling-container">
          <span onClick={slideRight} className="arrow-btn left">
            <LeftOutlined style={{ fontSize: 22 }} />
          </span>
          <div id="slider" className="scrolling-wrapper">
            {mProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <span onClick={slideLeft} className="arrow-btn right">
            <RightOutlined style={{ fontSize: 22 }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MostViewed;
