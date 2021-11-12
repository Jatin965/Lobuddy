import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

import logo from "../../assets/images/logo.png";
import head from "../../assets/images/hpik.png";
import dot from "../../assets/images/dot.png";

import { IoMdWatch } from "react-icons/io";
import { BiDotsVertical } from "react-icons/bi";

import { Menu, Dropdown } from "antd";

import {
  AppstoreOutlined,
  ShoppingOutlined,
  UserOutlined,
  MobileOutlined,
  LaptopOutlined,
  GiftOutlined,
  RiseOutlined,
} from "@ant-design/icons";

import PopUp from "../UI/PopUp";
import SearchView from "../Misc/SearchView";

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
        Phones
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

const Header = ({ vs, fix }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [filterProducts, setFilterProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSideVisible, setIsSideVisible] = useState(false);
  const [key, setKey] = useState("");
  const [sView, setSView] = useState(false);

  const side = (
    <div className="side">
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to={process.env.PUBLIC_URL + "/best-deals"}
      >
        <GiftOutlined
          style={{ color: "#f68a1e", fontWeight: 900, marginRight: 5 }}
        />{" "}
        Our best deals
      </Link>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to={process.env.PUBLIC_URL + "/trends"}
      >
        <RiseOutlined
          style={{ color: "#f68a1e", fontWeight: 900, marginRight: 5 }}
        />{" "}
        Products on trend
      </Link>

      <hr />

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?category=Phones"
      >
        <MobileOutlined
          style={{ color: "#f68a1e", fontWeight: 900, marginRight: 5 }}
        />{" "}
        Phones
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?sub=Tablets"
      >
        Tablets
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?sub=SmartPhones"
      >
        Smartphones
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?category=Computers"
      >
        <LaptopOutlined
          style={{ color: "#f68a1e", fontWeight: 900, marginRight: 5 }}
        />{" "}
        Computers
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?sub=Gaming"
      >
        Gaming
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?sub=Laptops"
      >
        Laptops
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?sub=Convertibles"
      >
        Convertibles
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
          fontWeight: 200,
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?category=Wareables"
      >
        <IoMdWatch
          style={{ color: "#f68a1e", fontWeight: 900, marginRight: 5 }}
        />{" "}
        Wearables
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?sub=SmartWatches"
      >
        Smartwatches
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?sub=Music"
      >
        Music
      </Link>

      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial Rounded MT",
        }}
        onClick={() => {
          setIsSideVisible(false);
          fix(false);
        }}
        to="/search?sub=ActivityTrackers"
      >
        Activity Trackers
      </Link>
    </div>
  );

  const handleChange = (e) => {
    setKey(e.target.value);
    if (e.target.value === "") {
      setFilterProducts([]);
    } else {
      setFilterProducts(
        products.filter((ps) =>
          ps.name.toLowerCase().includes(key.toLowerCase())
        )
      );
    }
  };
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  if (sView) {
    return <SearchView cls={setSView} vs={vs} />;
  }

  return (
    <header>
      {isSideVisible && (
        <div
          className="backdrop"
          onClick={() => {
            setIsSideVisible(false);
            fix(false);
          }}
        ></div>
      )}
      {isSideVisible && side}
      <div className={"container-fluid"}>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-12 col-12">
            {/* header logo */}
            <div className={`logo`}>
              <Link to={process.env.PUBLIC_URL + "/"}>
                <img src={logo} alt="lobuddy" />
              </Link>
              <Link className="mob-link" to={process.env.PUBLIC_URL + "/how"}>
                HOW LOBUDDY WORKS?
              </Link>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-2 col-2">
            <Dropdown
              trigger={["click"]}
              overlay={menu}
              placement="bottomCenter"
            >
              <button className="btn bg-transparent">
                <img
                  style={{ height: 12, width: "auto" }}
                  src={dot}
                  alt="dots"
                />{" "}
                <p> Categories </p>
              </button>
            </Dropdown>
            <div
              className="mob"
              onClick={() => {
                setIsSideVisible(true);
                fix(true);
              }}
            >
              <img style={{ height: 12, width: "auto" }} src={dot} alt="dots" />
            </div>
          </div>
          <div
            className={
              filterProducts.length != 0
                ? "col-xl-6 col-lg-6 col-md-10 col-sm-8 col-6 search__box  card focus"
                : "col-xl-6 col-lg-6 col-md-10 col-sm-8 col-6 search__box  card"
            }
          >
            <input
              className="mobSr"
              type="text"
              placeholder="Search for product, brands and more..."
              onClick={() => {
                setSView(true);
                vs(true);
              }}
            />
            <input
              className="sr"
              type="text"
              placeholder="Search for product, brands and more..."
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
                {filterProducts.slice(0, 15).map((value, key) => {
                  return (
                    <Link
                      to={`/product/${value.id}`}
                      key={key}
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
                      <p>{value.name.slice(0, 30)}... </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-2 col-2">
            <img
              className="Header-group"
              style={{ maxWidth: "18vw", marginLeft: "-4vw" }}
              src={head}
              alt="Header-group"
            />
            <div className="best" onClick={() => history.push("/best-deals")}>
              <GiftOutlined style={{ color: "#f68a1e" }} />
            </div>
          </div>
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
    </header>
  );
};

export default Header;
