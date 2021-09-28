import React from "react";

import { useHistory } from "react-router-dom";

const ProductThree = ({ product }) => {
  const history = useHistory();
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
        <h4>{product.description.slice(0, 100)}...</h4>
        <h2>
          from <span>RS 4999</span> per month
        </h2>
        <button onClick={() => history.push("/product/" + product.id)}>
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductThree;
