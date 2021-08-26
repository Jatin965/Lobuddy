import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { ShoppingCartOutlined } from '@ant-design/icons'

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
  const [modalShow, setModalShow] = useState(false);

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
                src={'http://127.0.0.1:8000' + product.image[0]}
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

            <div className="product-action-2">
              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Buy now"
                >
                  {" "}
                  {/*<i className="fa fa-shopping-cart"></i>{" "}*/}
                  <ShoppingCartOutlined />
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link
                  to={`${process.env.PUBLIC_URL}/product/${product.id}`}
                  title="Select options"
                >
                  <i className="fa fa-cog"></i>
                </Link>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => addToCart(product)}
                  className={
                    cartItem !== undefined && cartItem.quantity > 0
                      ? "active"
                      : ""
                  }
                  disabled={cartItem !== undefined && cartItem.quantity > 0}
                  title={
                    cartItem !== undefined ? "Added to cart" : "Add to cart"
                  }
                >
                  <i className="fa fa-shopping-cart"></i>
                </button>
              ) : (
                <button disabled className="active" title="Out of stock">
                  <i className="fa fa-shopping-cart"></i>
                </button>
              )}

                
            </div>
            <div className="pro-wishlist-2">
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
                <i className="fa fa-heart-o" />
              </button>
            </div>
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
                    <span className="old">
                      {finalProductPrice}
                    </span>{" "}
                    <span>
                      { finalDiscountedPrice}
                    </span>
                  </Fragment>
                ) : (
                  <span>{currency.currencySymbol + finalProductPrice} </span>
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
