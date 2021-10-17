import React from "react";

import { useHistory } from "react-router-dom";

const ProductThree = ({ product }) => {
  console.log(product);
  const history = useHistory();
  return (
    <div className="  product-three row ">
      <div className="product-three-image col-lg-4 col-5 card">
        <img className="default-img" src={product.image[0]} alt="" />
      </div>
      <div className="product-three-details col-lg-8 col-7 ">
        <h1>{product.name}</h1>
        <h4>{product.details.slice(0, 100)}...</h4>
        <h2>
          from <span>₹{(product.price * 0.045).toFixed(0)}</span> per month
        </h2>
        <button onClick={() => history.push("/product/" + product.id)}>
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductThree;
