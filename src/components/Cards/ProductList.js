import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductList;
