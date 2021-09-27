import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Iphone from "../assets/images/home/ip.png";
import Customer from "../assets/images/home/cus.png";

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

import CircleBag from "../components/UI/CircleBag";
import ProductWidth from "../components/Cards/ProductWidth";
import Loader from "../components/UI/Loader";
import Product from "../components/Cards/Product";
import Banner from "../components/UI/Banner";

import { MobileOutlined, LaptopOutlined } from "@ant-design/icons";
import ProductThree from "../components/Cards/ProductThree";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
          <button onClick={() => history.push("/best-deals")}>Deals</button>
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
        butLink="/explore?q=samsung"
        img1={sam1}
        img2={sam2}
        img3={sam3}
        logo={samLogo}
      />

      <div className="category-phone">
        <div className="category-phone-header">
          <CircleBag child={<MobileOutlined className="circle-icon" />} />
          <h1>Phones</h1>
        </div>

        <div className="category-phone-products">
          {products
            .filter((ps) => ps.category === "Mobiles")
            .slice(0, 5)
            .map((product) => (
              <Product product={product} />
            ))}

          <button className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
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
        img1={app1}
        img2={app2}
        img3={app3}
        logo={appLogo}
      />

      <div className="category-laptop">
        <div className="category-laptop-header">
          <CircleBag child={<LaptopOutlined className="circle-icon" />} />
          <h1>Laptops</h1>
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

      {products.slice(10, 14).map((product) => (
        <ProductThree product={product} />
      ))}

      <div className="home-most">
        <h3>Our best deals</h3>

        <div className="home-most-products">
          {products.slice(10, 14).map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>

      <div className="testimonials">
        <div className="content">
          <h1>Our happy customers</h1>
          <p>Check out what our customer saying about us</p>
        </div>
        <img src={Customer} alt="Customer" />
      </div>
    </div>
  );
};

export default Home;
