import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  AppstoreOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <header>
      <div className={"container-fluid"}>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-6 col-4">
            {/* header logo */}
            <div className={`logo`}>
              <Link to={process.env.PUBLIC_URL + "/"}>
                <img src="../../assets/images/l2.png" alt="lobuddy" />
              </Link>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-8">
            <button className="btn bg-transparent">
              <AppstoreOutlined /> Categories
            </button>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12 search__box">
            <input
              type="text"
              placeholder="Search for product, brands and more..."
            />
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-8">
            {/* Icon group */}
            {/* <IconGroup /> */}
            <ShoppingOutlined /> <UserOutlined />
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-7">
            HOW LOBUDDY WORKS?
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-5">
            OUR BEST DEALS
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {/* <MobileMenu /> */}
    </header>
  );
};

export default Header;
