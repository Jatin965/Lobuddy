import React, { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";
import ImageGallery from "react-image-gallery";

import { useDispatch, useSelector } from "react-redux";
import { detailProduct, listProducts } from "../redux/actions/productActions";

import { computers, smartPhones, tab, activity, music } from "../utils/box.js";

import { Slider, Carousel } from "antd";
import {
  TagFilled,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";

import Faq from "../components/UI/Faq";
import Product from "../components/Cards/Product";

import Test from "../assets/images/home/test.png";
import Customer from "../assets/images/home/cus.png";
import Customer2 from "../assets/images/home/cus2.png";
import Customer3 from "../assets/images/home/cus3.png";

import ProductImageGalleryLeftThumb from "../components/UI/ProductImageGallerySideThumb";
import Loader from "../components/UI/Loader";
import PopUp from "../components/UI/PopUp";
import BoxImg from "../components/UI/BoxImg";

const BASE = "https://backend.lobuddy.in";

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

const ProductDetail = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const {
    product,
    loading: loadingDetail,
    error: errorDetail,
  } = useSelector((state) => state.productDetail);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  console.log(product.sub === "Tab");
  console.log(tab);

  useEffect(() => {
    dispatch(detailProduct(match.params.id));
    dispatch(listProducts());
  }, [dispatch, match.params.id]);

  if (loading || loadingDetail) {
    return <Loader />;
  }
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const fun = () => {
    if (product.image && product.image.length === 0) return [];

    return (
      product.image &&
      product.image.map((img) => {
        return {
          original: BASE + img,
          thumbnail: BASE + img,
        };
      })
    );
    // product.image &&
    // product.image !== undefined &&
    // product.image.map((img) => {
    //   return {
    //     original: BASE + img,
    //     thumbnail: BASE + img,
    //   };
    // })
  };

  console.log(fun());

  console.log();

  console.log(
    product.image &&
      product.image.map((img) => [
        {
          original: BASE + img,
          thumbnail: BASE + img,
        },
      ])[0]
  );

  if (error || errorDetail) {
    return <h1>Error</h1>;
  }

  return (
    <div className="detail">
      <div className="tag">
        <TagFilled
          style={{ transform: "scale(-1,1)", fontSize: 50, color: "white" }}
        />
        <p>
          Welcome Buddy. Use discount coupon{" "}
          <span style={{ cursor: "pointer" }} onClick={showModal}>
            Hellobuddy007
          </span>{" "}
          and get 70% off in your first rental plan - It's valid till 31.11.21.
        </p>
      </div>

      <div className="detail-show">
        <div className="detail-show-content">
          <div className="detail-show-content-left">
            <h3>{product.name}</h3>
            <h6>{product.details}</h6>
            {/* <Slider style={{ height: 30 }} step={33} tipFormatter={null} /> */}
          </div>
          <div className="detail-show-content-right">
            <h3>{product.price}</h3>
            <h5>per month, thereafter cancel anytime With Lobuddy </h5>
            <button onClick={showModal}>Rent it</button>
            {isModalVisible && <PopUp view={setIsModalVisible} />}
          </div>
        </div>

        <ProductImageGalleryLeftThumb product={product} />
        <ImageGallery
          // items={() => {
          //   product.image &&
          //     product.image !== undefined &&
          //     product.image.map((img) => {
          //       return {
          //         original: BASE + img,
          //         thumbnail: BASE + img,
          //       };
          //     });
          // }}
          items={fun()}
          thumbnailPosition="right"
          showPlayButton={false}
          showNav={false}
          lazyLoad={true}
        />
      </div>

      <div className="detail-product">
        <h2>Product Details</h2>
        {product.description}
        <br />
        {product.details}
      </div>

      {/* <div className="sec3"> */}
      <div className="what">
        <h2>What you'll get in the box</h2>
        <div className="what-content">
          {product.sub == "Tab" &&
            tab.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}

          {product.sub == "Activity" &&
            activity.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}

          {product.sub == "Music" &&
            music.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}

          {product.sub == "Laptop" &&
            computers.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}

          {product.sub == "Smartphone" &&
            smartPhones.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}
        </div>
      </div>
      <Faq />
      {/* </div> */}

      <div className="testimonials row">
        <div className="content col-lg-6">
          <h1>Our happy customers in Germany</h1>
          <div className="row">
            <div class="col-6">
              <p>Check out what our customer saying about us...</p>
            </div>
            <div className="col-6">
              <img src={Test} alt="Happy User" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <Carousel style={{ maxWidth: "100%" }} arrows {...settings}>
            <img src={Customer} alt="Customer" />
            <img src={Customer2} alt="Customer" />
            <img src={Customer3} alt="Customer" />
          </Carousel>
        </div>
      </div>

      <div className="detail-most">
        <h1>Our best deals</h1>

        <div className="most-products">
          {products.slice(9, 13).map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
