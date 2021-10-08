import React from "react";

import { useHistory } from "react-router-dom";

const ProductThree = ({ product }) => {
  console.log(product);
  const history = useHistory();
  return (
    <div className="  product-three row ">
    <div className="product-three-image col-lg-4">
      <img
        className="default-img"
        src={"https://backend.lobuddy.in" + product.image[0]}
        alt=""
      />
    </div>
    <div className="product-three-details col-lg-8 ">
      <h1>{product.name}</h1>
      <h4>{product.description.slice(0, 100)}...</h4>
      <h2>
        from <span>₹{(product.price * 0.05).toFixed(2)}</span> per month
      </h2>
      <button onClick={() => history.push("/product/" + product.id)}>
        View Product
      </button>
    </div>
    </div>
  );
};

export default ProductThree;
