import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

import logo from "../../assets/images/logo.png";
import head from "../../assets/images/hpik.png";

import { IoMdWatch } from "react-icons/io";
import { BiDotsVertical } from "react-icons/bi";

import { Menu, Dropdown } from "antd";

import {
  AppstoreOutlined,
  ShoppingOutlined,
  UserOutlined,
  MobileOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

import PopUp from "../UI/PopUp";

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
        to="/search?category=Phones"
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
        to="/search?sub=Tablets"
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
        to="/search?sub=SmartPhones"
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
        to="/search?category=Computers"
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
        to="/search?sub=Gaming"
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
        to="/search?sub=Laptops"
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
        to="/search?sub=Convertibles"
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
        to="/search?category=Wareables"
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
        to="/search?sub=SmartWatches"
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
        to="/search?sub=Music"
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
        to="/search?sub=ActivityTrackers"
      >
        Activity Trackers
      </Link>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [filterProducts, setFilterProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
          <div className="col-xl-2 col-lg-2 col-md-12 col-12">
            {/* header logo */}
            <div className={`logo`}>
              <Link to={process.env.PUBLIC_URL + "/"}>
                <img src={logo} alt="lobuddy" />
              </Link>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-2 col-2">
            <Dropdown
              trigger={["click"]}
              overlay={menu}
              placement="bottomCenter"
            >
              <button className="btn bg-transparent">
                <BiDotsVertical style={{ margin: "-5px" }} />
                <BiDotsVertical style={{ margin: "-5px", padding: 0 }} />
                <BiDotsVertical style={{ margin: "-6px", padding: 0 }} />
                <p> Categories </p>
              </button>
            </Dropdown>
          </div>
          <div
            className={
              filterProducts.length != 0
                ? "col-xl-6 col-lg-6 col-sm-8 col-6 search__box  card focus"
                : "col-xl-6 col-lg-6 col-sm-8 col-6 search__box  card"
            }
          >
            <input
              type="text"
              placeholder="Search for "
              onChange={handleChange}
              value={key}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  history.push(`/search?name=${e.target.value}`);
                  setFilterProducts([]);
                  setKey("");
                }
              }}
            />

            {filterProducts.length != 0 && (
              <div className="dataResult col-xl-6 col-lg-6 col-sm-8 col-6">
                {products
                  .filter((ps) =>
                    ps.name.toLowerCase().includes(key.toLowerCase())
                  )
                  .slice(0, 15)
                  .map((value, key) => {
                    return (
                      <Link
                        to={`/product/${value.id}`}
                        onClick={() => {
                          setKey("");
                          setFilterProducts([]);
                        }}
                        className="dataItem"
                      >
                        <img
                          style={({ paddingRight: 20 }, { height: 30 })}
                          src={value.image[0]}
                          alt=""
                        />
                        <p>{value.name.slice(0, 30)}... </p> <br />
                        {/* <p>{value.description.slice(0, 30)}</p> */}
                      </Link>
                    );
                  })}
              </div>
            )}
          </div>

          <div className="col-xl-2 col-lg-2 col-sm-2 col-2">
            {/* Icon group */}
            {/* <IconGroup /> */}
            {/* <ShoppingOutlined /> <UserOutlined /> */}
            <img
              style={{ maxWidth: "18vw", marginLeft: "-4vw" }}
              src={head}
              alt="Header-group"
            />
          </div>
        </div>
        <div className="Header-group">
          <img src={head} alt="Header-group" />
          <button onClick={() => setIsModalVisible(true)}>Subscribe</button>
          {isModalVisible && <PopUp view={setIsModalVisible} />}
        </div>

        <div className="row li2 pt-4">
          <Link to={process.env.PUBLIC_URL + "/how"}>HOW LOBUDDY WORKS?</Link>

          <Link to={process.env.PUBLIC_URL + "/best-deals"}>
            OUR BEST DEALS
          </Link>
          <Link to={process.env.PUBLIC_URL + "/trends"}>PRODUCTS ON TREND</Link>
          <button onClick={() => setIsModalVisible(true)}>Subscribe</button>
          {isModalVisible && <PopUp view={setIsModalVisible} />}
        </div>
      </div>
      {/* mobile menu */}
      {/* <MobileMenu /> */}
    </header>
  );
};

export default Header;
