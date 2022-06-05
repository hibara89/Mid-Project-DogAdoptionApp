import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>
        Dogs<span>Adoption</span>
      </h2>
      <ul>
        <Link to="/">
          <li>HomePage</li>
        </Link>
        <Link to="/team">
          {" "}
          <li>Team</li>
        </Link>
        <Link to="/categories">
          <li>Categories</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
