import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

import logo from "../../assets/images/logo.png";
import head from "../../assets/images/hpik.png";

import { IoMdWatch } from "react-icons/io";

import { Menu, Dropdown } from "antd";

import {
  AppstoreOutlined,
  ShoppingOutlined,
  UserOutlined,
  MobileOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?category=phone"
      >
        <MobileOutlined
          style={{ color: "#f68a1e", fontWeight: 900, marginRight: 5 }}
        />{" "}
        Phone
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?sub=tablets"
      >
        Tablets
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?sub=smartphones"
      >
        Smartphones
      </Link>
    </Menu.Item>

    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?category=computers"
      >
        <LaptopOutlined
          style={{ color: "#f68a1e", fontWeight: 900, marginRight: 5 }}
        />{" "}
        Computers
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?sub=gaming"
      >
        Gaming
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?sub=laptop"
      >
        Laptops
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?sub=convertible"
      >
        Convertibles
      </Link>
    </Menu.Item>

    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
          fontWeight: 200,
        }}
        to="/search?category=wearables"
      >
        <IoMdWatch
          style={{ color: "#f68a1e", fontWeight: 900, marginRight: 5 }}
        />{" "}
        Wearables
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?sub=smartwatch"
      >
        Smartwatches
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?sub=music"
      >
        Music
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        to="/search?sub=activity"
      >
        Activity Trackers
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
        <div className=" row ">
          <div className=" col-lg-2">
            {/* header logo */}
            <div className={`logo`}>
              <Link to={process.env.PUBLIC_URL + "/"}>
                <img src={logo} alt="lobuddy" />
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3  col-2 ">
            <Dropdown overlay={menu} placement="bottomCenter">
              <button className="btn bg-transparent">
                <AppstoreOutlined />
              </button>
            </Dropdown>
          </div>
          <div className="  col-lg-6 col-sm-7 col-8 search__box">
            <input
              type="text"
              placeholder="Search for product, brands and more..."
              onChange={handleChange}
              value={key}
            />
          </div>

          <div className="col-xl-2 col-lg-2 col-md-2 col-2 ">
            {/* Icon group */}
            {/* <IconGroup /> */}
            {/* <ShoppingOutlined /> <UserOutlined /> */}
            <button className="coming"></button>
          </div>
        </div>

        <div className="row li2 pt-4">
          <Link to={process.env.PUBLIC_URL + "/how"}>HOW LOBUDDY WORKS?</Link>

          <Link to={process.env.PUBLIC_URL + "/best-deals"}>
            OUR BEST DEALS
          </Link>
          <Link to={process.env.PUBLIC_URL + "/trends"}>PRODUCTS ON TREND</Link>
          <button>Subscribe</button>
        </div>
      </div>
      {filterProducts.length != 0 && (
        <div className="dataResult">
          {products
            .filter((ps) => ps.name.toLowerCase().includes(key.toLowerCase()))
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
      {/* mobile menu */}
      {/* <MobileMenu /> */}
    </header>
  );
};

export default Header;
