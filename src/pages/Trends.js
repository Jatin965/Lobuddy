import React, { useEffect } from "react";
import CircleBag from "../components/UI/CircleBag";
import Loader from "../components/UI/Loader";

import { RiseOutlined } from "@ant-design/icons";

import img2 from "../assets/images/best/2.png";
import ProductList from "../components/Cards/ProductList";
import ProductWidth from "../components/Cards/ProductWidth";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

const Trends = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  console.log(products.filter((ps) => ps.tags.includes("2")));

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="best">
      <div className="best-header">
        <CircleBag child={<RiseOutlined className="circle-icon" />} />

        <h1>Products on trend</h1>
      </div>

      <div className="best-header-content">
        <div className="best-header-content-text">
          <h1>Trendy gadgets of October month </h1>
          <h4>
            Lobuddy has a availability of your dream gadget with affordable
            rates..
          </h4>
        </div>
        <img style={{ maxWidth: 550 }} src={img2} alt="header-img1" />
      </div>

      <div className="best-products">
        {window.innerWidth > 500 ? (
          <ProductList
            products={products.filter((ps) => ps.tags.includes("trendy"))}
          />
        ) : (
          products
            .filter((ps) => ps.tags.includes("trendy"))
            .map((product) => <ProductWidth product={product} />)
        )}
      </div>
    </div>
  );
};

export default Trends;
