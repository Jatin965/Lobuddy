import React from "react";

const SearchHeader = ({ word, len }) => {
  return (
    <div style={{ margin: "20px auto", width: "85vw" }}>
      <p style={{ fontFamily: "Arial Rounded MT" }}>
        Showing {len > 9 ? "1-9" : len >= 2 ? `1-${len}` : "1"} of {len} results
        for "{word}"
      </p>
    </div>
  );
};

export default SearchHeader;
