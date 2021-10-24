import React from "react";

import { useHistory } from "react-router-dom";

import { MobileOutlined, LaptopOutlined } from "@ant-design/icons";
import { IoMdWatch } from "react-icons/io";
import CircleBag from "../UI/CircleBag";

const SubHeader = ({ word, cat }) => {
  const history = useHistory();
  return (
    <div className="sub-header">
      {cat === "Phones" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <CircleBag child={<MobileOutlined className="circle-icon" />} />
          <h1
            style={{
              fontFamily: "Arial Rounded MT",
              fontWeight: 600,
              marginLeft: 15,
              cursor: "pointer",
            }}
            onClick={() => history.push("/search?category=Phones")}
          >
            Phones {"> "}
          </h1>
          <h1
            style={{
              fontFamily: "Arial Rounded MT",
              fontWeight: 600,
              marginLeft: 15,
              color: "#f68a1e",
            }}
          >
            {word}
          </h1>
        </div>
      )}

      {cat === "Wareables" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <CircleBag child={<IoMdWatch className="circle-icon" />} />
          <h1
            style={{
              fontFamily: "Arial Rounded MT",
              fontWeight: 600,
              marginLeft: 15,
              cursor: "pointer",
            }}
            onClick={() => history.push("/search?category=Wareables")}
          >
            Wareables {"> "}
          </h1>
          <h1
            style={{
              fontFamily: "Arial Rounded MT",
              fontWeight: 600,
              marginLeft: 15,
              color: "#f68a1e",
            }}
          >
            {word}
          </h1>
        </div>
      )}

      {cat === "Computers" && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <CircleBag child={<LaptopOutlined className="circle-icon" />} />
          <h1
            style={{
              fontFamily: "Arial Rounded MT",
              fontWeight: 600,
              marginLeft: 15,
              cursor: "pointer",
            }}
            onClick={() => history.push("/search?category=Computers")}
          >
            Computers {"> "}
          </h1>
          <h1
            style={{
              fontFamily: "Arial Rounded MT",
              fontWeight: 600,
              marginLeft: 15,
              color: "#f68a1e",
            }}
          >
            {word}
          </h1>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
