import React from "react";
import Iphone from "../assets/images/home/ip.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-image">
          <img src={Iphone} alt="I-Phone" />
        </div>

        <div className="home-header-content">
          <h1>Access over ownership on trendy technology world</h1>
          <h5>
            Get the gadgets you need, use it as long as you want. Get discount
            of 90% on your rental plan with code HELLOBUDDY2025
          </h5>
          <button>Deals</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
