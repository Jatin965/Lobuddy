import React from "react";

import CircleBag from "../components/UI/CircleBag";

import Lottie from "react-lottie";

import { QuestionOutlined, StarOutlined } from "@ant-design/icons";

import ani5 from "../assets/animations/lf30_editor_4lvs77hl";
import ani2 from "../assets/animations/lf30_editor_ailx5yx7.json";
import ani1 from "../assets/animations/lf30_editor_kgyathvt.json";
import ani4 from "../assets/animations/lf30_editor_lhizrndq.json";
import ani3 from "../assets/animations/lf30_editor_yerpk26o.json";

import im1 from "../assets/images/how/1.png";
import im2 from "../assets/images/how/2.png";
import im3 from "../assets/images/how/3.png";

const How = () => {
  return (
    <div className="how">
      <div className="how-header">
        <CircleBag child={<QuestionOutlined className="how-icon" />} />

        <h1>How it works!</h1>
      </div>
      <div className="how-1">
        <img src={im1} />
        <div className="how-content-1">
          <CircleBag child={<h1>1</h1>} />
          <h1>Select what you need</h1>
        </div>
      </div>
      <div className="how-2">
        <div className="how-content-2">
          <CircleBag child={<h1>2</h1>} />
          <h1>Decide rental period</h1>
        </div>
        <img src={im2} />
      </div>
      <div className="how-3">
        <img src={im3} />
        <div className="how-content-3">
          <CircleBag child={<h1>3</h1>} />
          <h1>Enjoy the tech</h1>
        </div>
      </div>

      <div className="how-header how-benefits">
        <CircleBag child={<StarOutlined className="how-icon" />} />

        <h1>Your Benefits</h1>
      </div>
      <div className="grid-container">
        <div className="benefit ben-1">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: ani1,
            }}
            style={{ margin: 0 }}
            width={400}
            height={350}
          ></Lottie>
          <div className="ben-content">
            <h1>Easy upgrade</h1>
            <p>Trendy technology accessibility in very minimal price</p>
          </div>
        </div>
        <div className="benefit ben-2">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: ani2,
            }}
            style={{ margin: 0 }}
            width={400}
            height={350}
          ></Lottie>
          <div className="ben-content">
            <h1>Pocket friendly</h1>
            <p>No deposit, only rental amount</p>
          </div>
        </div>
        <div className="benefit ben-3">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: ani3,
            }}
            style={{ margin: 0 }}
            width={400}
            height={350}
          ></Lottie>
          <div className="ben-content">
            <h1>Stay flexible</h1>
            <p>
              Use it as long as you want, return it back anytime for free, Or
              buy it anytime
            </p>
          </div>
        </div>
        <div className="benefit ben-4">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: ani4,
            }}
            style={{ margin: 0 }}
            width={400}
            height={350}
          ></Lottie>
          <div className="ben-content">
            <h1>Rent from buddy</h1>
            <p>Commitment and hassle free renting</p>
          </div>
        </div>
        <div className="benefit ben-5">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: ani5,
            }}
            style={{ margin: 0 }}
            width={400}
            height={350}
          ></Lottie>
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
