import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc">
      <input
        className="pa3 ba br4 b--green b--dashed bg-lightest-blue"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
