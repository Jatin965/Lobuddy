import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

import logo from "../../assets/images/logo.png";

import { Menu, Dropdown } from "antd";

import {
  AppstoreOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <Link style={{ textDecoration: "none" }} to="/search">
        Phone
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link style={{ textDecoration: "none" }} to="/search">
        Laptop
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link style={{ textDecoration: "none" }} to="/search">
        Wearables
      </Link>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  const dispatch = useDispatch();
  const [filterProducts, setFilterProducts] = useState([]);

  const [key, setKey] = useState("");

  const handleChange = (e) => {
    setKey(e.target.value);
    if (e.target.value === "") {
      setFilterProducts([]);
    } else {
      setFilterProducts(products);
    }
  };
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  return (
    <header>
      <div className={"container-fluid"}>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-6 col-4">
            {/* header logo */}
            <div className={`logo`}>
              <Link to={process.env.PUBLIC_URL + "/"}>
                <img src={logo} alt="lobuddy" />
              </Link>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-8">
            <Dropdown overlay={menu} placement="bottomCenter">
              <button className="btn bg-transparent">
                <AppstoreOutlined /> Categories
              </button>
            </Dropdown>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12 search__box">
            <input
              type="text"
              placeholder="Search for product, brands and more..."
              onChange={handleChange}
              value={key}
            />
            {filterProducts.length != 0 && (
              <div className="dataResult">
                {products
                  .filter((ps) =>
                    ps.name.toLowerCase().includes(key.toLowerCase())
                  )
                  .slice(0, 15)
                  .map((value, key) => {
                    return (
                      <Link
                        to={`/search?q=${value.name}`}
                        onClick={() => {
                          setKey("");
                          setFilterProducts([]);
                        }}
                        className="dataItem"
                      >
                        <p>{value.name.slice(0, 30)}... </p>
                      </Link>
                    );
                  })}
              </div>
            )}
          </div>

          <div className="col-xl-2 col-lg-2 col-md-6 col-8">
            {/* Icon group */}
            {/* <IconGroup /> */}
            {/* <ShoppingOutlined /> <UserOutlined /> */}
            <button className="coming">Coming Soon</button>
          </div>
        </div>

        <div className="row pt-4">
          <Link
            to={process.env.PUBLIC_URL + "/how"}
            className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-7"
          >
            HOW LOBUDDY WORKS?
          </Link>
          <div /*className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-5" */>
            <Link to={process.env.PUBLIC_URL + "/best-deals"}>
              OUR BEST DEALS
            </Link>
          </div>
          <Link to={process.env.PUBLIC_URL + "/trends"}>PRODUCTS ON TREND</Link>
        </div>
      </div>
      {/* mobile menu */}
      {/* <MobileMenu /> */}
    </header>
  );
};

export default Header;
