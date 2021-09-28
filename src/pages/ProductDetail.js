import React, { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  detailProduct,
  listProducts,
  addUser,
} from "../redux/actions/productActions";

import { Slider, Modal } from "antd";
import { TagFilled } from "@ant-design/icons";

import Faq from "../components/UI/Faq";
import Product from "../components/Cards/Product";

import Customer from "../assets/images/home/cus.png";
import ProductImageGalleryLeftThumb from "../components/UI/ProductImageGallerySideThumb";
import Loader from "../components/UI/Loader";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (name !== "" && phone !== "" && email !== "") {
      dispatch(addUser(name, email, phone));
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const {
    loading: loadingUser,
    success,
    error: errorUser,
  } = useSelector((state) => state.userAdd);

  console.log(loadingUser);
  console.log(success);
  console.log(errorUser);

  const {
    product,
    loading: loadingDetail,
    error: errorDetail,
  } = useSelector((state) => state.productDetail);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  // console.log(product);
  // console.log(products);

  useEffect(() => {
    dispatch(detailProduct(match.params.id));
    dispatch(listProducts());
  }, [dispatch, match.params.id]);

  if (loading || loadingDetail) {
    return <Loader />;
  }

  if (error || errorDetail) {
    return <h1>Error</h1>;
  }

  return (
    <div className="detail">
      <div className="tag">
        <TagFilled
          style={{ transform: "scale(-1,1)", fontSize: 50, color: "white" }}
        />
        <p>
          Welcome Buddy. Use discount coupon <span>Hellobuddy007</span> and get
          70% off in your first rental plan - It's valid till 31.02.21.
        </p>
      </div>

      <div className="detail-show">
        <div className="detail-show-content">
          <div className="detail-show-content-left">
            <h2>{product.name}</h2>
            <h5>{product.details}</h5>
            {/* <Slider step={9} /> */}
          </div>
          <div className="detail-show-content-right">
            <h3>{product.price}</h3>
            <h5>per month, thereafter cancel anytime With Lobuddy </h5>
            <button onClick={showModal}>Rent it</button>
            <Modal
              title="LOBUDDY"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <h4>
                Some Content, as we have not started our services yet. Get early
                access and huge discounts by sign up to our services now.
              </h4>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                required
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-mail"
                required
              />
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                placeholder="Phone No."
                required
              />
            </Modal>
          </div>
        </div>

        <ProductImageGalleryLeftThumb product={product} />
      </div>

      <div className="detail-product">
        <h2>Product Details</h2>
        {product.description}
        <br />
        {product.details}
      </div>

      <div className="sec3">
        <div className="what">
          <h2>What you'll get in the box</h2>
          <div className="what-content"></div>
        </div>
        <Faq />
      </div>

      <div className="testimonials">
        <div className="content">
          <h1>Our happy customers</h1>
          <p>Check out what our customer saying about us</p>
        </div>
        <img src={Customer} alt="Customer" />
      </div>

      <div className="detail-most">
        <h1>Our best deals</h1>

        <div className="most-products">
          {products.slice(9, 13).map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
