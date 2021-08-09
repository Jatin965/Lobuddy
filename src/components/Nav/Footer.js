import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

import { Grid, Typography, Box, Container } from "@material-ui/core";

const Footer = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
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
    <footer>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box>COMPANY</Box>
              <Box>
                <Link to="/how">HOW IT WORKS</Link>
              </Box>
              <Box>
                <Link to="/faq">FAQ</Link>
              </Box>
              <Box>
                <Link to="/careers">CAREERS</Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box>POLICES</Box>
              <Box>
                <Link to="/how">PRIVACY</Link>
              </Box>
              <Box>
                <Link to="/faq">TERMS & CONDITIONS</Link>
              </Box>
              <Box>
                <Link to="/careers">COOKIES</Link>
              </Box>
              <Box>
                <Link to="/careers">CANCEL & RETURN</Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box>CONTACT US</Box>
              <Box>
                <Link to="/how">1800-720-6260</Link>
              </Box>
              <Box>
                <Link to="/faq">8595641828 (9am-6pm)</Link>
              </Box>
              <Box>
                <Link to="/careers">Lobuddy@gmail.com</Link>
              </Box>
            </Grid>
          </Grid>

          <hr />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} style={{ textAlign: "left" }}>
              &copy; Lobuddy Pvt. Ltd {new Date().getFullYear()}
            </Grid>

            <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
              Social Icons
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
        style={{ background: "#ff9f00" }}
      >
        <i className="fa fa-angle-double-up"></i>
      </button> */}
    </footer>
  );
};

export default Footer;
