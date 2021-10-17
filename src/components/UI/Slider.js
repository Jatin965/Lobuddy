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
    <div class="flex-container">
      <div class="dropdown ">
        <div class="num num1">1+</div>
        <div class="dropdown-content  1">
          <div class="n-num">
            <p class="digit">1+</p>
            <p class="month">month</p>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div class="num num2">3+</div>
        <div class="dropdown-content 2">
          <div class="n-num">
            <p class="digit">3+</p>
            <p class="month">month</p>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div class="num num3">6+</div>
        <div class="dropdown-content1 3">
          <div class="n-num">
            <p class="digit">6+</p>
            <p class="month">month</p>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div class="num num4">12+</div>
        <div class="dropdown-content 4">
          <div class="n-num">
            <p class="digit">12+</p>
            <p class="month">month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
