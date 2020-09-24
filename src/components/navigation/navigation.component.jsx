import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navigation.component.scss";
export const Navigation = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className="nav-container">
      <button
        className="icon"
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        &#9776;
      </button>
      <ul className={`nav-bar ${toggleDropdown ? "toggle-display" : ""}`}>
        <li>
          <NavLink to="/all" className="nav-item">
            All Restaurants
          </NavLink>
        </li>
        <li>
          <NavLink to="/top" className="nav-item" activeClassName="active">
            Top Restaurants
          </NavLink>
        </li>
        <li>
          <NavLink to="/country" className="nav-item" activeClassName="active">
            Restaurants by Country
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
