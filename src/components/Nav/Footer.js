import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
// import FooterCopyright from "../../compnts/footer/FooterCopyright";
// import FooterNewsletter from "./FooterNewsletter";

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
    <footer className={`footer-area bg-gray pt-100 pb-70`}>
      <div className={`container`}>
        <div className="row">
          <div className={`col-lg-3 col-sm-4`}>
            {/* footer copyright */}

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
                    <Link to={process.env.PUBLIC_URL + "#/"}>PRIVACY</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>
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
                      Lobuddy@gmail.com
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
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
