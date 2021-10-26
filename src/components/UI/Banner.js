import React from "react";

import { useHistory } from "react-router-dom";

const Banner = ({ head, para, but, butLink, img1, img2, img3, logo }) => {
  const history = useHistory();
  return (
    <div className="banner row">
      <div className="banner-content">
        <h1>{head}</h1>
        <p>{para}</p>

        <button onClick={() => history.push(butLink)}>{but}</button>
      </div>
      <div className="banner-images">
        <div className="left">
          <img src={img1} alt="left" />
        </div>
        <div className="top">
          <img src={img2} alt="top" />
        </div>
        <div className="right">
          <img src={img3} alt="right" />
        </div>
        <div className="logo">
          <img src={logo} alt="bottom" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
