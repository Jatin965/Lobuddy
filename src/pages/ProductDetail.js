import React, { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  detailProduct,
  listProducts,
  addUser,
} from "../redux/actions/productActions";

import { Slider, Modal, Input, Button } from "antd";
import {
  TagFilled,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import Faq from "../components/UI/Faq";
import Product from "../components/Cards/Product";

import Customer from "../assets/images/home/cus.png";
import img1 from "../assets/images/detail/1.png";
import img2 from "../assets/images/detail/2.png";
import img3 from "../assets/images/detail/3.png";
import logo from "../assets/images/logo.png";

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
          70% off in your first rental plan - It's valid till 31.11.21.
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
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button type="primary" onClick={handleOk}>
                  Subscribe
                </Button>,
              ]}
            >
              <div className="upper">
                <div className="left">
                  <img src={logo} alt="Logo" />
                  <h3>Hello buddy,</h3>
                  <h4>We are coming to India...</h4>
                </div>
                <img src={img1} alt="link-diag" />
              </div>

              <div className="lower">
                <img src={img2} alt="person" />
                <div className="content">
                  <div className="tag">
                    <TagFilled
                      style={{
                        transform: "scale(-1,1)",
                        fontSize: 30,
                        color: "white",
                      }}
                    />
                    <p>
                      Subscribe with lobuddy to get <span>1 month free</span>{" "}
                      subscription on any of your dream gadget.
                    </p>
                  </div>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    size="large"
                    prefix={<UserOutlined />}
                    placeholder="Name"
                    required
                    bordered={false}
                    style={{ left: "20%" }}
                  />
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    size="large"
                    prefix={<MailOutlined />}
                    placeholder="E-mail"
                    required
                    bordered={false}
                    style={{ left: "20%" }}
                  />
                  <Input
                    onChange={(e) => setPhone(e.target.value)}
                    type="phone"
                    size="large"
                    prefix={<PhoneOutlined rotate={90} />}
                    placeholder="Phone No."
                    required
                    bordered={false}
                    style={{ left: "20%" }}
                  />
                </div>
              </div>
            </Modal>
            <Modal
              visible={success}
              footer={[<Button type="primary">Explore</Button>]}
            >
              <img style={{ maxWidth: "15vw" }} src={logo} alt="Logo" />
              <h2 style={{ textAlign: "center", color: "#f68a1e" }}>
                Thank you for your subscription
              </h2>
              <h3 style={{ textAlign: "center" }}>
                Welcome to best technology world, we will be in touch with you
                soon with your dream gadget
              </h3>
              <img style={{ maxWidth: "30vw" }} src={img3} alt="celebrate" />
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
