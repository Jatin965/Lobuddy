import React, { useState } from "react";

const Slider = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    document.classList.add(".dropdown-content");
  };
  return (
    <div className="flex-container">
      <div
        onClick={() => setActive(true)}
        className={`${active ? "dropdown dropdown-content" : "dropdown"}`}
      >
        <div className="num">1+</div>
        <div className="dropdown-content">
          <div className="n-num">
            <p className="digit">1+</p>
            <p className="month">month</p>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div className="num">3+</div>
        <div className="dropdown-content">
          <div className="n-num">
            <p className="digit">3+</p>
            <p className="month">month</p>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div className="num">6+</div>
        <div className="dropdown-content">
          <div className="n-num">
            <p className="digit">6+</p>
            <p className="month">month</p>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div className="num">12+</div>
        <div className="dropdown-content">
          <div className="n-num">
            <p className="digit">12+</p>
            <p className="month">month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
