import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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

import head from "../assets/images/hpik.png";

import CircleBag from "../components/UI/CircleBag";
import Loader from "../components/UI/Loader";
import Banner from "../components/UI/Banner";
import PopUp from "../components/UI/PopUp";

import ProductThree from "../components/Cards/ProductThree";
import ProductWidth from "../components/Cards/ProductWidth";
import Product from "../components/Cards/Product";

import { MobileOutlined, LaptopOutlined } from "@ant-design/icons";

import Testimonial from "../components/UI/Testimonial";
import MostViewed from "../components/Misc/MostViewed";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  // console.log(products);

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home">
      <div className="home-group">
        <img src={head} alt="home-group" />
        <button onClick={() => setIsModalVisible(true)}>Subscribe</button>
        {isModalVisible && <PopUp view={setIsModalVisible} />}
      </div>

      {products
        .filter((ps) => ps.name.includes("Garmin Venu Sq Music GPS, battery for up to 6 days"))
        .map((product) => (
          <ProductThree key={product.id} product={product} />
        ))}

      <MostViewed />

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
            .filter((ps) => ps.category === "Phones")
            .slice(51, 56)
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}

          <button
            onClick={() => history.push("/search?category=Phones")}
            className="col-xl-3 col-md-6 col-lg-4 col-sm-12"
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
            .filter((ps) => ps.category === "Computers")
            .slice(18, 20)
            .map((product) => (
              <ProductWidth key={product.id} product={product} />
            ))}
        </div>
        <button onClick={() => history.push("/search?category=Computers")}>
          View all
        </button>
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

      {products.slice(84, 86).map((product) => (
        <ProductThree key={product.id} product={product} />
      ))}

      <div className="home-most">
        <h1>Our best deals</h1>

        <div className="home-most-products">
          {products
            .filter((ps) => ps.tags.includes("deal"))
            .slice(15, 19)
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
        <button onClick={() => history.push("/best-deals")}>View all</button>
      </div>

      <Testimonial />
    </div>
  );
};

export default Home;
