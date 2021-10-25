import React from "react";
import $ from "jquery";

const Slider = ({ set }) => {
  $(document).ready(function () {
    $(".num1").click(function () {
      $(".1").css("display", "inline-block");
      $(".2").css("display", "none");
      $(".3").css("display", "none");
      $(".4").css("display", "none");
      set(0.055);
    });
  });
  $(document).ready(function () {
    $(".num2").click(function () {
      $(".2").css("display", "inline-block");
      $(".1").css("display", "none");
      $(".3").css("display", "none");
      $(".4").css("display", "none");
      set(0.05);
    });
  });
  $(document).ready(function () {
    $(".num3").click(function () {
      $(".3").css("display", "inline-block");
      $(".2").css("display", "none");
      $(".1").css("display", "none");
      $(".4").css("display", "none");
      set(0.045);
    });
  });

  $(document).ready(function () {
    $(".num4").click(function () {
      $(".4").css("display", "inline-block");
      $(".2").css("display", "none");
      $(".3").css("display", "none");
      $(".1").css("display", "none");
      set(0.04);
    });
  });
  return (
    <div className="flex-container">
      <div className="dropdown ">
        <div className="num num1">1+</div>
        <div className="dropdown-content  1">
          <div className="n-num">
            <h3 className="digit">1+</h3>
            <p className="month">MONTHS</p>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div className="num num2">3+</div>
        <div className="dropdown-content 2">
          <div className="n-num">
            <h3 className="digit">3+</h3>
            <p className="month">MONTHS</p>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div className="num num3">6+</div>
        <div className="dropdown-content1 3">
          <div className="n-num">
            <h3 className="digit">6+</h3>
            <p className="month">MONTHS</p>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div className="num num4">12+</div>
        <div className="dropdown-content 4">
          <div className="n-num">
            <h3 className="digit">12+</h3>
            <p className="month">MONTHS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
