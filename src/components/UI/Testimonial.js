import React from "react";

import Test from "../../assets/images/home/test.png";

import Customer from "../../assets/images/home/cus.png";
import Customer2 from "../../assets/images/home/cus2.png";
import Customer3 from "../../assets/images/home/cus3.png";
import Customer4 from "../../assets/images/home/cus4.png";
import Customer5 from "../../assets/images/home/cus5.png";
import Customer6 from "../../assets/images/home/cus6.png";
import Customer7 from "../../assets/images/home/cus7.png";

import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        background: "white",
        fontSize: "25px",
        lineHeight: "1.5715",
        borderRadius: "50%",
        boxShadow: "0 3px 6px rgb(0 0 0 / 0.2)",
        padding: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: -5,
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        background: "white",
        fontSize: "25px",
        lineHeight: "1.5715",
        borderRadius: "50%",
        boxShadow: "0 3px 6px rgb(0 0 0 / 0.2)",
        padding: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: -5,
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Testimonial = () => {
  return (
    <div className="testimonials row">
      <div className="content col-lg-6">
        <h1>Our happy customers in Germany</h1>
        <div className="row">
          <div className="col-6">
            <p>Check out what our customer saying about us...</p>
          </div>
          <div className="col-6">
            <img src={Test} alt="Happy User" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <Carousel style={{ maxWidth: "100%" }} arrows {...settings}>
          <img src={Customer} alt="Customer" />
          <img src={Customer2} alt="Customer" />
          <img src={Customer3} alt="Customer" />
          <img src={Customer4} alt="Customer" />
          <img src={Customer5} alt="Customer" />
          <img src={Customer6} alt="Customer" />
          <img src={Customer7} alt="Customer" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
