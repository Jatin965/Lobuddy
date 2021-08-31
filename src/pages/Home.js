import React, { useEffect } from "react";
import Iphone from "../assets/images/home/ip.png";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";
import Product from "../components/Cards/Product";
import Banner from "../components/UI/Banner";

import sam1 from "../assets/images/banner/samsung/1.png";
import sam2 from "../assets/images/banner/samsung/2.png";
import sam3 from "../assets/images/banner/samsung/3.png";
import samLogo from "../assets/images/banner/samsung/logo.png";

import app1 from "../assets/images/banner/apple/1.png";
import app2 from "../assets/images/banner/apple/2.png";
import app3 from "../assets/images/banner/apple/3.png";
import appLogo from "../assets/images/banner/apple/logo.png";

const Home = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  console.log(products.slice(0, 4));

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-image">
          <img src={Iphone} alt="I-Phone" />
        </div>

        <div className="home-header-content">
          <h1>Access over ownership on trendy technology world</h1>
          <h5>
            Get the gadgets you need, use it as long as you want. Get discount
            of 90% on your rental plan with code HELLOBUDDY2025
          </h5>
          <button>Deals</button>
        </div>
      </div>

      <div className="home-most">
        <h3>Most Viewed</h3>

        <div className="home-most-products">
          {products.slice(0, 4).map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>

      <Banner
        head="Samsung - Inspire the World, Create the Future"
        para="Rent smartphones, tablets, watches and the latest samsung gadgets with
          lobuddy"
        but="Explore Samsung"
        img1={sam1}
        img2={sam2}
        img3={sam3}
        logo={samLogo}
      />

      <Banner
        head="Apple - Think different
        Everything is here"
        para="Rent iPhone, MacBook, watches and the latest apple 
        gadgets with lobuddy"
        but="Explore Apple"
        img1={app1}
        img2={app2}
        img3={app3}
        logo={appLogo}
      />
    </div>
  );
};

export default Home;
