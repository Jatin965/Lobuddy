import React, { useEffect, useState } from "react";

import SubHeader from "../components/Nav/SubHeader";

import { useRouteMatch } from "react-router-dom";
import ImageGallery from "react-image-gallery";

import { useDispatch, useSelector } from "react-redux";
import { detailProduct, listProducts } from "../redux/actions/productActions";

import { computers, smartPhones, tab, activity, music } from "../utils/box.js";

import { AiFillTag } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";

import Faq from "../components/UI/Faq";
import Product from "../components/Cards/Product";

import tag from "../assets/images/detail/tag.png";

import Loader from "../components/UI/Loader";
import PopUp from "../components/UI/PopUp";
import BoxImg from "../components/UI/BoxImg";
import Slider from "../components/UI/Slider";
import Testimonial from "../components/UI/Testimonial";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [multi, setMulti] = useState(0.045);

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

  console.log(product);

  const image = product.image
    ? product.image.map((img) => {
        return {
          thumbnail: img,
          original: img,
        };
      })
    : [];

  useEffect(() => {
    dispatch(detailProduct(match.params.id));
    dispatch(listProducts());
  }, [dispatch, match.params.id]);

  if (loading || loadingDetail) {
    return <Loader />;
  }

  if (error || errorDetail) {
    return <h1>Error</h1>;
  }

  return (
    <div className="detail">
      <SubHeader word={product.sub} cat={product.category} />
      <div className="tag">
        <img style={{ height: 60, width: "auto" }} src={tag} alt="tag" />
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

            <Slider set={setMulti} />
          </div>
          <div className="detail-show-content-right ">
            <h1>
              {product.tags && product.tags.includes("deal") ? (
                <>
                  <span
                    style={{
                      fontSize: 24,
                      textDecoration: "3px solid line-through",
                    }}
                    className="old"
                  >
                    {"₹" + (product.price * multi).toFixed(0)}
                  </span>
                  <br />
                  <span style={{ color: "#f68a1e" }}>
                    {"₹" + (product.price * (multi - 0.005)).toFixed(0)}
                  </span>
                </>
              ) : (
                <span>{"₹" + (product.price * multi).toFixed(0)}</span>
              )}
            </h1>
            <h6>per month, thereafter cancel anytime With Lobuddy </h6>
            <div style={{ display: "flex" }}>
              <div className="cb">
                <FaTruckMoving
                  style={{
                    color: "#f68a1e",
                    fontSize: 20,
                  }}
                />
              </div>
              <p>Delivery in 1-3 business days</p>
            </div>
            <div style={{ display: "flex" }}>
              <div className="cb">
                <AiFillTag style={{ color: "#f68a1e", fontSize: 20 }} />
              </div>
              <p>Free delivery</p>
            </div>
            <button onClick={showModal}>Rent it</button>
          </div>
        </div>

        {product.image && (
          <ImageGallery
            items={image}
            showThumbnails={window.innerWidth < 500 ? false : true}
            thumbnailPosition={window.innerWidth < 500 ? "top" : "right"}
            showPlayButton={false}
            showNav={false}
            lazyLoad={true}
            showBullets={window.innerWidth < 500 ? true : false}
          />
        )}
      </div>

      <div className="detail-product">
        <h2>Product Details</h2>
        {product.description &&
          product.description.map((desc) => (
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "#878787",
                  padding: 0,
                  marginTop: "-10px",
                  display: "list-item",
                  listStylePosition: "inside",
                  listStyleType: "disc",
                  fontSize: "170%",
                }}
              ></div>
              <p
                style={{
                  fontFamily: "Arial Rounded MT",
                  color: "#878787",
                }}
              >
                {desc}
              </p>
            </div>
          ))}
      </div>

      <div className="what">
        <h2>What you'll get in the box</h2>
        <div className="what-content">
          {product.sub == "Tablets" &&
            tab.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}

          {(product.sub == "ActivityTrackers" ||
            product.sub == "SmartWatches") &&
            activity.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}

          {product.sub == "Music" &&
            music.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}

          {product.category == "Computers" &&
            computers.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}

          {product.sub == "SmartPhones" &&
            smartPhones.map((ts) => {
              return <BoxImg image={ts.image} name={ts.name} />;
            })}
        </div>
      </div>
      <div className="faq-container">
        <Faq />
      </div>

      <Testimonial />

      <div className="detail-most">
        <h1>Most Viewed</h1>

        <div className="most-products">
          {products.slice(21, 25).map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
      <div className="price-stick">
        <div className="row">
          <div className="col-lg-7 col-sm-7 col-7 ">
            <h3>
              {product.tags && product.tags.includes("deal") ? (
                <>
                  <span
                    style={{
                      fontSize: 18,
                      textDecoration: "3px solid line-through",
                    }}
                    className="old"
                  >
                    {"₹" + (product.price * multi).toFixed(0)}{" "}
                  </span>
                  <span style={{ color: "#f68a1e" }}>
                    {"₹" + (product.price * (multi - 0.005)).toFixed(0)}
                  </span>
                </>
              ) : (
                <span>{"₹" + (product.price * multi).toFixed(0)}</span>
              )}
            </h3>
            <p>per month, thereafter cancel anytime With Lobuddy </p>
          </div>
          <div className="col-lg-5 col-sm-5 col-5  sticky-but">
            <button onClick={showModal}>Rent it</button>
            {isModalVisible && <PopUp view={setIsModalVisible} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
