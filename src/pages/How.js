import React from "react";

import CircleBag from "../components/UI/CircleBag";

import { QuestionOutlined, StarOutlined } from "@ant-design/icons";

import im1 from "../assets/images/how/1.png";
import im2 from "../assets/images/how/2.png";
import im3 from "../assets/images/how/3.png";

import Up from "../assets/images/how/up.png";
import Buddy from "../assets/images/how/buddy.png";
import Eco from "../assets/images/how/eco.png";
import Mini from "../assets/images/how/mini.png";
import Flexible from "../assets/images/how/flexible.png";

const How = () => {
  return (
    <div className="how">
      <div className="how-header">
        <CircleBag child={<QuestionOutlined className="how-icon" />} />

        <h1 style={{ fontFamily: "Arial Rounded MT" }}>How it works!</h1>
      </div>
      <div className="how-1">
        <img src={im1} alt="display-1" />
        <div className="how-content-1">
          <CircleBag child={<h1 style={{ color: "#f68a1e" }}>1</h1>} />
          <h1>Select what you need</h1>
        </div>
      </div>
      <div className="how-2">
        <div className="how-content-2">
          <CircleBag child={<h1 style={{ color: "#f68a1e" }}>2</h1>} />
          <h1>Decide rental period</h1>
        </div>
        <img src={im2} alt="display-2" />
      </div>
      <div className="how-3">
        <img src={im3} alt="display-3" />
        <div className="how-content-3">
          <CircleBag child={<h1 style={{ color: "#f68a1e" }}>3</h1>} />
          <h1>Enjoy the tech</h1>
        </div>
      </div>

      <div className="how-header how-benefits">
        <CircleBag child={<StarOutlined className="how-icon" />} />

        <h1 style={{ fontFamily: "Arial Rounded MT" }}>Your Benefits</h1>
      </div>
      <div className="grid-container">
        <div className="benefit ben-1">
          <div className="img-container">
            <img src={Up} alt="Upgrade" />
          </div>
          <div className="ben-content">
            <h1>Easy upgrade</h1>
            <p>Trendy technology accessibility in very minimal price</p>
          </div>
        </div>
        <div className="benefit ben-2">
          <div className="img-container">
            <img src={Eco} alt="Economic" />
          </div>
          <div className="ben-content">
            <h1>Pocket friendly</h1>
            <p>No deposit, only rental amount</p>
          </div>
        </div>
        <div className="benefit ben-3">
          <div className="img-container">
            <img src={Flexible} alt="Flexible" />
          </div>
          <div className="ben-content">
            <h1>Stay flexible</h1>
            <p>
              Use it as long as you want, return it back anytime for free, Or
              buy it anytime
            </p>
          </div>
        </div>
        <div className="benefit ben-4">
          <div className="img-container">
            <img src={Buddy} alt="Buddy" />
          </div>
          <div className="ben-content">
            <h1>Rent from buddy</h1>
            <p>Commitment and hassle free renting</p>
          </div>
        </div>
        <div className="benefit ben-5">
          <div className="img-container">
            <img src={Mini} alt="Mini rental" />
          </div>
          <div className="ben-content">
            <h1>Mini renting</h1>
            <p>Rental periods starts from one month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
