import React, { useEffect } from "react";
import CircleBag from "../components/UI/CircleBag";
import Loader from "../components/UI/Loader";

import { GiftOutlined } from "@ant-design/icons";

import img1 from "../assets/images/best/1.png";
import ProductList from "../components/Cards/ProductList";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

const Best = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="best">
      <div className="best-header">
        <CircleBag child={<GiftOutlined className="how-icon" />} />

        <h1>Our best deals!</h1>
      </div>

      <div className="best-header-content">
        <img src={img1} alt="header-img1" />
        <div className="best-header-content-text">
          <h1>Every tech you need, on a budget</h1>
          <h4>Lobuddy made your favorite tech gadgets affordable for you.</h4>
        </div>
      </div>

      <div className="best-products">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Best;
