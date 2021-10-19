import React from "react";

import { useHistory } from "react-router-dom";

const Banner = ({ head, para, but, butLink, img1, img2, img3, logo }) => {
  const history = useHistory();
  return (
    <div className="banner row">
      <div className="banner-content col-lg-7 col-7">
        <h1>{head}</h1>
        <p>{para}</p>

        <button onClick={() => history.push(butLink)}>{but}</button>
      </div>
      <div className="banner-images col-lg-5 col-5">
        <img className="left" src={img1} alt="left" />
        <img className="top" src={img2} alt="top" />
        <img className="right" src={img3} alt="right" />
        <div className="logo">
          <img style={{ width: 60 }} src={logo} alt="bottom" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
