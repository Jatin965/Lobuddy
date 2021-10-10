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
          <Link>FAQ</Link>
          <Link to="/best-deals">Deals</Link>
        </div>
      </div>

      <hr />

      <div className="lower row">
      <div className="col-lg-4">
        <p>&copy; Lobuddy Pvt. Ltd</p>
      </div>
        <div className="social col-lg-4">
          <a>
            <FacebookFilled style={{ fontSize: 20, padding: "0 1vw" }} />
          </a>
          <a>
            <YoutubeFilled style={{ fontSize: 20, padding: "0 1vw" }} />
          </a>
          <a>
            <TwitterOutlined style={{ fontSize: 20, padding: "0 1vw" }} />
          </a>
          <a>
            <LinkedinFilled style={{ fontSize: 20, padding: "0 1vw" }} />
          </a>
          <a>
            <InstagramOutlined style={{ fontSize: 20, padding: "0 1vw" }} />
          </a>
        </div>
        <div className="others col-lg-4">
          <Link to="/terms-and-conditions">Terms and Conditions |</Link>
          <Link to="/privacy-policy">Privacy policy |</Link>
          <Link>Cookie settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /*<div className="container">
        <div className="row">
          <div className={`col-lg-3 col-sm-4`}>


            <div className="copyright mb-30">
              <div className="footer-logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    alt="Lobuddy"
                    src={process.env.PUBLIC_URL + "/assets/img/logo/logo.png"}
                  />
                </Link>
              </div>
              <p>
                &copy; {new Date().getFullYear()}{" "}
                <a
                  href="https://minzor.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lobuddy
                </a>
                .<br /> All Rights Reserved
              </p>
            </div>
          </div>
          <div className={`col-lg-3 col-sm-4`}>
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>COMPANY</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>
                      HOW IT WORKS
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>
                      CAREERS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`col-lg-3 col-sm-4`}>
            <div className={`footer-widget mb-30 ml-50`}>
              <div className="footer-title">
                <h3>POLICIES</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                      PRIVACY
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/terms-and-conditions"}>
                      TERMS & CONDITIONS
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
                      CANCEL & RETURN
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>COOKIES</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`col-lg-3 col-sm-6`}>
            <div className={`footer-widget mb-30 ml-75`}>
              <div className="footer-title">
                <h3>CONTACT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      1800-720-6260
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      8595641828 (9am-6pm)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      contact@lobuddy.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
        style={{ background: "#ff9f00" }}
      >
        <DoubleLeftOutlined rotate={90} />
      </button> */
}
