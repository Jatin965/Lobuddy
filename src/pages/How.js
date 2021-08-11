import React from "react";

import CircleBag from "../components/UI/CircleBag";

import { QuestionCircleFilled } from "@ant-design/icons";

import im1 from "../assets/images/how/1.png";
import im2 from "../assets/images/how/2.png";
import im3 from "../assets/images/how/3.png";

const How = () => {
  return (
    <div className="how">
      <div className="how-header">
        <CircleBag child={<QuestionCircleFilled className="how-icon" />} />

        <h2>How it works!</h2>
      </div>
      <div className="how-1">
        <img src={im1} />
      </div>
      <div className="how-2">
        <img src={im2} />
      </div>
      <div className="how-3">
        <img src={im3} />
      </div>

      <div className="how-benefits"></div>
    </div>
  );
};

export default How;
