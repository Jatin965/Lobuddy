import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loader = () => {
  // return <div className="spinner"></div>;
  return (
    <div className="spinner">
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 60, color: "#f68a1e" }} spin />
        }
      />
    </div>
  );
};

export default Loader;
