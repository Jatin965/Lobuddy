import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions/productActions";

import { Modal, Input, Button } from "antd";

import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

import img1 from "../../assets/images/detail/1.png";
import img2 from "../../assets/images/detail/2.png";
import img3 from "../../assets/images/detail/3.png";
import tag from "../../assets/images/detail/tag.png";
import logo from "../../assets/images/logo.png";
import Loader from "./Loader";

let flag = 0;

const PopUp = ({ view }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);

  const handleOk = () => {
    if (name !== "" && phone !== "" && email !== "") {
      dispatch(addUser(name, email, phone));
    }
    setVisible1(false);
    setVisible2(true);
  };

  const handleCancel = () => {
    view(false);
    setVisible1(false);
    setVisible2(false);
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
        visible={visible1}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            style={{ fontWeight: "600", fontFamily: "Sitka Small" }}
            type="primary"
            onClick={handleOk}
          >
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
          <img className="img-link" src={img1} alt="link-diag" />
        </div>

        <div className="lower">
          <img src={img2} alt="person" />
          <div className="content">
            <div className="tag">
              <img src={tag} alt="tag" />
              <p>
                Subscribe with lobuddy to get <span>1 month free</span>{" "}
                subscription on any of your dream gadget.
              </p>
            </div>
            <Input
              onChange={(e) => setName(e.target.value)}
              type="text"
              size="large"
              prefix={<UserOutlined className="popup-icon" />}
              placeholder="Name"
              required
              bordered={false}
              style={{ left: "5%" }}
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              size="large"
              prefix={<MailOutlined className="popup-icon" />}
              placeholder="E-mail"
              required
              bordered={false}
              style={{ left: "5%" }}
            />
            <Input
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              size="large"
              prefix={<PhoneOutlined className="popup-icon" rotate={90} />}
              placeholder="Phone No."
              required
              bordered={false}
              style={{ left: "5%" }}
            />
          </div>
        </div>
      </Modal>
      <Modal
        visible={visible2}
        onOk={() => {
          setVisible2(false);
          view(false);
          history.push("/");
        }}
        onCancel={handleCancel}
        footer={[
          <Button
            style={{ fontWeight: "600", fontFamily: "Sitka Small" }}
            type="primary"
            onClick={() => {
              setVisible2(false);
              view(false);
              history.push("/");
            }}
          >
            Explore
          </Button>,
        ]}
      >
        <img className="logo" src={logo} alt="Logo" />
        <h4 className="thank">Thank you for your subscription</h4>
        <h5 className="you">
          Welcome to best technology world, we will be in touch with you soon
          with your dream gadget
        </h5>
        <img className="success" src={img3} alt="celebrate" />
      </Modal>
    </div>
  );
};

export default PopUp;
