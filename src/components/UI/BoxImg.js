import React from "react";

const BoxImg = ({ image, name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img
        style={{
          maxWidth: 200,
          height: "auto",
          display: "block",
          margin: "auto",
        }}
        src={image}
        alt={name}
      />
      <p style={{ fontFamily: "Arial Rounded MT" }}>{name}</p>
    </div>
  );
};

export default BoxImg;
