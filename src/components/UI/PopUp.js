import React, { useState } from "react";

import { useHistory } from "react-router-dom";

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
import Loader from "./Loader";

const PopUp = ({ view }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    if (name !== "" && phone !== "" && email !== "") {
      dispatch(addUser(name, email, phone));
    }
    view(false);
    setVisible(true);
  };

  const handleCancel = () => {
    view(false);
  };

  const { loading, success, error } = useSelector((state) => state.userAdd);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

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
            <h4>Hello buddy,</h4>
            <h5>We are coming to India...</h5>
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
              style={{ left: "10%" }}
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              size="large"
              prefix={<MailOutlined />}
              placeholder="E-mail"
              required
              bordered={false}
              style={{ left: "10%" }}
            />
            <Input
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              size="large"
              prefix={<PhoneOutlined rotate={90} />}
              placeholder="Phone No."
              required
              bordered={false}
              style={{ left: "10%" }}
            />
          </div>
        </div>
      </Modal>
      <Modal
        visible={visible}
        onOk={() => {
          setVisible(false);
          history.push("/");
        }}
        onCancel={() => setVisible(false)}
        footer={[<Button type="primary">Explore</Button>]}
      >
        <img style={{ maxWidth: "125px" }} src={logo} alt="Logo" />
        <h4
          style={{
            textAlign: "center",
            color: "#f68a1e",
            fontFamily: "Sitka Small",
            fontWeight: 600,
            margin: "3vh 0",
            // padding: "0 200px",
          }}
        >
          Thank you for your subscription
        </h4>
        <h5
          style={{
            textAlign: "center",
            fontFamily: "Sitka Small",
            fontWeight: 600,
            marginBottom: "-70px",
          }}
        >
          Welcome to best technology world, we will be in touch with you soon
          with your dream gadget
        </h5>
        <img
          style={{
            maxWidth: "30vw",
            display: "block",
            margin: "auto",
          }}
          src={img3}
          alt="celebrate"
        />
      </Modal>
    </div>
  );
};

export default PopUp;
