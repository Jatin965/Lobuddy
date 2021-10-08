import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions/productActions";

import { Modal, Input, Button } from "antd";

import {
  TagFilled,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import img1 from "../../assets/images/detail/1.png";
import img2 from "../../assets/images/detail/2.png";
import img3 from "../../assets/images/detail/3.png";
import logo from "../../assets/images/logo.png";

const PopUp = ({ view }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleOk = () => {
    if (name !== "" && phone !== "" && email !== "") {
      dispatch(addUser(name, email, phone));
    }
    view(false);
  };

  const handleCancel = () => {
    view(false);
  };

  const { loading, success, error } = useSelector((state) => state.userAdd);
  return (
    <div>
      <Modal
        visible={true}
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
          Welcome to best technology world, we will be in touch with you soon
          with your dream gadget
        </h3>
        <img style={{ maxWidth: "30vw" }} src={img3} alt="celebrate" />
      </Modal>
    </div>
  );
};

export default PopUp;
