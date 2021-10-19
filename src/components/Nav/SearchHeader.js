import React from "react";

const SearchHeader = ({ word, len }) => {
  return (
    <div style={{ margin: "20px auto", width: "85vw" }}>
      <p style={{ fontFamily: "Arial Rounded MT" }}>
        Showing {len > 16 ? "1-16" : len >= 2 ? `1-${len}` : "1"} of {len}{" "}
        results for "{word}"
      </p>

      <hr />
    </div>
  );
};

export default SearchHeader;
