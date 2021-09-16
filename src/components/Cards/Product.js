import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { HeartOutlined } from "@ant-design/icons";

const Product = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass,
  colorClass,
}) => {
  const discountedPrice = product.price;
  const finalProductPrice = product.price;
  const finalDiscountedPrice = discountedPrice;

  return (
    <Fragment>
      <div
        className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap-7 ${
            spaceBottomClass ? spaceBottomClass : ""
          } ${colorClass ? colorClass : ""} `}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              <img
                className="default-img"
                src={"http://127.0.0.1:8000" + product.image[0]}
                alt=""
              />
            </Link>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}

            {/* <div className="pro-wishlist-2">
              <button
                className={wishlistItem !== undefined ? "active" : ""}
                disabled={wishlistItem !== undefined}
                title={
                  wishlistItem !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                onClick={() => addToWishlist(product)}
              >
                <p>
                  <HeartOutlined
                    style={{ fontSize: 25, color: "white", paddingLeft: 0 }}
                  />
                </p>
              </button>
            </div> */}
          </div>
          <div className="product-content-2">
            <div className="title-price-wrap-2">
              <h3>
                <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
                  {product.name}
                </Link>
              </h3>
              <div className="price-2">
                {discountedPrice !== null ? (
                  <Fragment>
                    <span className="old">{"Rs " + finalProductPrice}</span>{" "}
                    <span>{"Rs " + finalDiscountedPrice}</span>
                  </Fragment>
                ) : (
                  <span>{"Rs " + finalProductPrice} </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  wishlistItem: PropTypes.object,
};

export default Product;
