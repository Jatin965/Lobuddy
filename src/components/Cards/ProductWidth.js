import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProductWidth = ({ product }) => {
  const discountedPrice = product.price;
  const finalProductPrice = product.price;
  const finalDiscountedPrice = discountedPrice;
  return (
    <div className="product-wrap">
      <div className="product-img">
        <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
          <img
            className="default-img"
            src={"https://backend.lobuddy.in" + product.image[0]}
            alt=""
          />
        </Link>
      </div>
      <div className="product-content-2">
        <div className="title-price-wrap-2">
          <h3>
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              {product.name}
            </Link>
          </h3>
          <h4 className="desc">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              {product.description.slice(0, 100)}...
            </Link>
          </h4>
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
  );
};

export default ProductWidth;
