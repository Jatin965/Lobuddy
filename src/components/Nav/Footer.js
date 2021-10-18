import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import {
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
  YoutubeFilled,
  FacebookFilled,
} from "@ant-design/icons";

import logo from "../../assets/images/logo2.png";

const Footer = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer className="footer-area bg-gray pt-100 pb-70">
      <hr />
      <div className="upper row">
        <div className="col-lg-4">
          <img src={logo} alt="Brand logo" />
        </div>

        <div className="contact col-lg-4 mr-4">
          <h4>CONTACT US</h4>
          <p>1800-720-6260</p>
          <p>8595641828 (9am-6pm)</p>
          <p>contact@lobuddy.com</p>
        </div>
        <div className="company col-lg-4">
          <h4>COMPANY</h4>
          <Link to="/how">How it works</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/best-deals">Deals</Link>
        </div>
      </div>

      <hr />

      <div className="lower row">
        <div className="col-lg-4">
          <p>&copy; Lobuddy Pvt. Ltd</p>
        </div>
        <div className="social col-lg-4">
          <a
            href="https://www.facebook.com/Lobuddy-110402504742336/"
            target="_blank"
          >
            <FacebookFilled
              style={{ fontSize: 20, padding: "0 1vw", color: "black" }}
            />
          </a>
          <a
            target="_blank"
            href="https://youtube.com/channel/UC5kZOsh8ior796wHqeEhIyw"
          >
            <YoutubeFilled
              style={{ fontSize: 20, padding: "0 1vw", color: "black" }}
            />
          </a>
          <a target="_blank" href="https://twitter.com/BuddyLo">
            <TwitterOutlined
              style={{ fontSize: 20, padding: "0 1vw", color: "black" }}
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/80316748/">
            <LinkedinFilled
              style={{ fontSize: 20, padding: "0 1vw", color: "black" }}
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/lobuddy007/">
            <InstagramOutlined
              style={{ fontSize: 20, padding: "0 1vw", color: "black" }}
            />
          </a>
        </div>
        <div className="others col-lg-4">
          <Link to="/terms-and-conditions">Terms and Conditions |</Link>
          <Link to="/privacy-policy">Privacy policy |</Link>
          <Link to="#">Cookie settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
