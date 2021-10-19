import React from "react";

import { MobileOutlined, LaptopOutlined } from "@ant-design/icons";
import { IoMdWatch } from "react-icons/io";
import CircleBag from "../UI/CircleBag";

const CategoryHeader = ({ word }) => {
  return (
    <div style={{ margin: "20px auto", width: "85vw" }}>
      {word === "Phones" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <CircleBag child={<MobileOutlined className="circle-icon" />} />
          <h1
            style={{
              fontFamily: "Arial Rounded MT",
              fontWeight: 600,
              marginLeft: 15,
            }}
          >
            Phones
          </h1>
        </div>
      )}

      {word === "Wareables" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <CircleBag child={<IoMdWatch className="circle-icon" />} />
          <h1
            style={{
              fontFamily: "Arial Rounded MT",
              fontWeight: 600,
              marginLeft: 15,
            }}
          >
            Wareables
          </h1>
        </div>
      )}

      {word === "Computers" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <CircleBag child={<LaptopOutlined className="circle-icon" />} />
          <h1
            style={{
              fontFamily: "Arial Rounded MT",
              fontWeight: 600,
              marginLeft: 15,
            }}
          >
            Computers
          </h1>
        </div>
      )}
    </div>
  );
};

export default CategoryHeader;
