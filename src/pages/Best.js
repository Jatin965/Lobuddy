import React from "react";
import CircleBag from "../components/UI/CircleBag";

import { GiftOutlined } from "@ant-design/icons";

import img1 from '../assets/images/best/1.png'
import ProductList from "../components/Cards/ProductList";

const Best = () => {
  return (
    <div className="best">
      <div className="best-header">
        <CircleBag child={<GiftOutlined className="how-icon" />} />

        <h1>Our best deals!</h1>
      </div>

      <div className="best-header-content">
        <img src={img1} alt='header-img1' />
        <div className="best-header-content-text">
          <h1>Every tech you need, on a budget</h1>
          <h4>Lobuddy made your favorite tech gadgets affordable for you.</h4>
        </div>
      </div>

      <div className='best-products'>
        <ProductList />
      </div>
    </div>
  );
};

export default Best;
