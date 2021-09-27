import React from "react";

const ProductThree = ({ product }) => {
  return (
    <div className="product-three">
      <div className="product-three-image">
        <img
          className="default-img"
          src={"https://backend.lobuddy.in" + product.image[0]}
          alt=""
        />
      </div>
      <div className="product-three-details">
        <h1>{product.name}</h1>
        <h3>{product.details}</h3>
        <h2>
          from <span>RS 4999</span> per month
        </h2>
        <button>View Product</button>
      </div>
    </div>
  );
};

export default ProductThree;
