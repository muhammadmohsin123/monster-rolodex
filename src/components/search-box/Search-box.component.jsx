import React from "react";
import "./search-box.component.css";

const Search = ({ handler }) => {
  return (
    <div>
      <input className="search" type="search" onChange={handler} />;
    </div>
  );
};

export default Search;
