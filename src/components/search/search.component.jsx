import React from "react";
import "./search.styles.scss";
export const Search = ({ searchText, handleSearchTextChange }) => (
  <div className="search-container">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search..."
      value={searchText}
      onChange={(e) => handleSearchTextChange(e.target.value)}
    />
  </div>
);
