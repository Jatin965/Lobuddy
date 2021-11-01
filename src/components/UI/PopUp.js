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
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    if (name !== "" && phone !== "" && email !== "") {
      dispatch(addUser(name, email, phone));
    }
    view(false);
    setVisible(true);
    console.log(visible);
  };

  console.log(visible);
  const handleCancel = () => {
    view(false);
    console.log(visible);
  };

  const { loading, success, error } = useSelector((state) => state.userAdd);

  if (success && flag === 0 && !loading && !error) {
    setVisible(true);
    flag++;
  } else {
    setVisible(false);
  }
  console.log(flag);
  console.log(success);

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
          <img className="img-link" src={img1} alt="link-diag" />
        </div>

        <div className="lower">
          <img src={img2} alt="person" />
          <div className="content">
            <div className="tag">
              <img style={{ height: 60, width: "auto" }} src={tag} alt="tag" />
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
              style={{ left: "5%" }}
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              size="large"
              prefix={<MailOutlined />}
              placeholder="E-mail"
              required
              bordered={false}
              style={{ left: "5%" }}
            />
            <Input
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              size="large"
              prefix={<PhoneOutlined rotate={90} />}
              placeholder="Phone No."
              required
              bordered={false}
              style={{ left: "5%" }}
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
