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
          <img className="default-img" src={product.image[0]} alt="" />
        </Link>
      </div>
      <div className="product-content-2">
        <div className="title-price-wrap-2">
          <h2>
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              {product.name}
            </Link>
          </h2>
          <h4 className="desc">
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              {product.details.slice(0, 100)}...
            </Link>
          </h4>
          <div className="price-2">
            {product.tags.includes("deal") ? (
              <Fragment>
                <span style={{ color: "#878787" }}>
                  from{"  "}
                  <span style={{ fontSize: 30 }} className="old">
                    {"₹" + (finalDiscountedPrice * 0.045).toFixed(0)}
                  </span>
                  <span style={{ color: "#f68a1e", fontSize: 30 }}>
                    {"₹" + (finalDiscountedPrice * 0.04).toFixed(0)}
                  </span>
                  per month
                </span>
              </Fragment>
            ) : (
              <span style={{ color: "#878787" }}>
                from{"  "}
                <span style={{ fontSize: 30 }}>
                  {"₹" + (finalDiscountedPrice * 0.045).toFixed(0)}
                </span>
                per month
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWidth;
