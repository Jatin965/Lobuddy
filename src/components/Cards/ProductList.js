import React, { useEffect } from "react";
import Product from "./Product";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  if (loading) {
    return <h1>Loading</h1>
  }

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
