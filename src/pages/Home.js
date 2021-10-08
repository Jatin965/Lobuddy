import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swiper from "react-id-swiper";

import Iphone from "../assets/images/home/ip.png";
import Test from "../assets/images/home/test.png";

import Customer from "../assets/images/home/cus.png";
import Customer2 from "../assets/images/home/cus2.png";
import Customer3 from "../assets/images/home/cus3.png";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

import sam1 from "../assets/images/banner/samsung/1.png";
import sam2 from "../assets/images/banner/samsung/2.png";
import sam3 from "../assets/images/banner/samsung/3.png";
import samLogo from "../assets/images/banner/samsung/logo.png";

import app1 from "../assets/images/banner/apple/1.png";
import app2 from "../assets/images/banner/apple/2.png";
import app3 from "../assets/images/banner/apple/3.png";
import appLogo from "../assets/images/banner/apple/logo.png";

import one1 from "../assets/images/banner/oneplus/one1.png";
import one2 from "../assets/images/banner/oneplus/one2.png";
import one3 from "../assets/images/banner/oneplus/one3.png";
import oneLogo from "../assets/images/banner/oneplus/onelogo.png";

import CircleBag from "../components/UI/CircleBag";
import Loader from "../components/UI/Loader";
import Banner from "../components/UI/Banner";

import ProductThree from "../components/Cards/ProductThree";
import ProductWidth from "../components/Cards/ProductWidth";
import Product from "../components/Cards/Product";

import {
  MobileOutlined,
  LaptopOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";

import { Carousel } from "antd";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        background: "white",
        fontSize: "25px",
        lineHeight: "1.5715",
        borderRadius: "50%",
        boxShadow: "0 3px 6px rgb(0 0 0 / 0.2)",
        padding: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: -5,
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        background: "white",
        fontSize: "25px",
        lineHeight: "1.5715",
        borderRadius: "50%",
        boxShadow: "0 3px 6px rgb(0 0 0 / 0.2)",
        padding: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: -5,
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [flag, setFlag] = useState(5);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  console.log(products);

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  if (loading) {
    return <Loader />;
  }

  // console.log(products.filter((ps) => ps.name === "Apple iPhone 13 128 GB"));

  return (

    <div className="home">
      {/* <div className="home-header">
        <div className="home-header-image">
          <img src={Iphone} alt="I-Phone" />
        </div>

        <div className="home-header-content">
          <h1>Access over ownership on trendy technology world</h1>
          <h5>
            Get the gadgets you need, use it as long as you want. Get discount
            of 90% on your rental plan with code HELLOBUDDY2025
          </h5>
          <button onClick={() => history.push("/best-deals")}>Deals</button>
        </div>
      </div> */}
      <div class="scrolling-wrapper">
    <div class="card"><h2></h2></div>
    <div class="card"><h2>Card</h2></div>
    <div class="card"><h2>Card</h2></div>
    <div class="card"><h2>Card</h2></div>
    <div class="card"><h2>Card</h2></div>
    <div class="card"><h2>Card</h2></div>
    <div class="card"><h2>Card</h2></div>
    <div class="card"><h2>Card</h2></div>
    <div class="card"><h2>Card</h2></div>
  </div>

      {products
        .filter((ps) => ps.name === "Apple iPhone 13 128 GB")
        .map((product) => (
          <ProductThree product={product} />
        ))}

      <div className="home-most" style={{ boxShadow: "none", margin: "2vh 0" }}>
        <h3>Most Viewed</h3>

        <div className="home-most-products">
          {/* <Swiper> */}
          {products.slice(0, 4).map((product) => (
            <Product product={product} />
          ))}
          {/* </Swiper> */}
        </div>
      </div>

      <Banner
        head="Samsung - Inspire the World, Create the Future"
        para="Rent smartphones, tablets, watches and the latest samsung gadgets with
          lobuddy"
        but="Explore Samsung"
        butLink="/explore?q=samsung"
        img1={sam1}
        img2={sam2}
        img3={sam3}
        logo={samLogo}
      />

      <div className="category-phone">
        <div className="category-phone-header">
          <CircleBag child={<MobileOutlined className="circle-icon" />} />
          <h1 style={{ fontFamily: "Arial Rounded MT", fontWeight: 600 }}>
            Phones
          </h1>
        </div>

        <div className="category-phone-products">
          {products
            .filter((ps) => ps.category === "Mobiles")
            .slice(0, flag)
            .map((product) => (
              <Product product={product} />
            ))}

          <button
            onClick={() => setFlag((prev) => prev + 4)}
            className="col-xl-3 col-md-6 col-lg-4 col-sm-6"
          >
            View all
          </button>
        </div>
      </div>

      <Banner
        head="OnePlus - Pretty much everything
        you could ask for"
        para="Rent smartphones, tablets, watches and the latest
        OnePlus gadgets with lobuddy"
        but="Explore OnePlus"
        butLink="/explore?q=oneplus"
        img1={one1}
        img2={one2}
        img3={one3}
        logo={oneLogo}
      />

      <div className="category-laptop">
        <div className="category-laptop-header">
          <CircleBag child={<LaptopOutlined className="circle-icon" />} />
          <h1 style={{ fontFamily: "Arial Rounded MT", fontWeight: 600 }}>
            Computers
          </h1>
        </div>

        <div className="category-laptop-products">
          {products
            .filter((ps) => ps.category === "Laptop")
            .slice(0, 5)
            .map((product) => (
              <ProductWidth product={product} />
            ))}
        </div>
      </div>

      <Banner
        head="Apple - Think different
        Everything is here"
        para="Rent iPhone, MacBook, watches and the latest apple
        gadgets with lobuddy"
        but="Explore Apple"
        butLink="/explore?q=apple"
        img1={app1}
        img2={app2}
        img3={app3}
        logo={appLogo}
      />

      {products.slice(12, 14).map((product) => (
        <ProductThree product={product} />
      ))}

      <div className="home-most">
        <h1>Our best deals</h1>

        <div className="home-most-products">
          {products.slice(10, 14).map((product) => (
            <Product product={product} />
          ))}
        </div>
        <button onClick={() => history.push("/best-deals")}>View all</button>
      </div>

      <div className="testimonials">
        <div className="content">
          <h1>Our happy customers in Germany</h1>
          <p>Check out what our customer saying about us...</p>
          <img src={Test} alt="Happy User" />
        </div>
        <Carousel style={{ maxWidth: "50vw" }} arrows {...settings}>
          <img style={{ right: 0 }} src={Customer} alt="Customer" />
          <img src={Customer2} alt="Customer" />
          <img src={Customer3} alt="Customer" />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
