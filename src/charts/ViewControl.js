import React, { useState } from "react";
import "./css/ViewControl.css";
import { CgArrowsExpandRight } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("1d");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="navigation-bar">
      <div className="wrapper">
        <div className="icon-buttons">
          <CgArrowsExpandRight />
          <button className="fullscreen-button">Full Screen</button>
          <CiCirclePlus />
          <button className="compare-button">Compare</button>
        </div>
        <div className="category-buttons">
          <Link to="/periodselector">
            <button
              onClick={() => handleCategoryClick("1d")}
              className={selectedCategory === "1d" ? "selected" : ""}
            >
              1d
            </button>
          </Link>
          <Link to="/periodselector">
            <button
              onClick={() => handleCategoryClick("3d")}
              className={selectedCategory === "3d" ? "selected" : ""}
            >
              3d
            </button>
          </Link>
          <Link to="/periodselector">
            <button
              onClick={() => handleCategoryClick("1w")}
              className={selectedCategory === "1w" ? "selected" : ""}
            >
              1w
            </button>
          </Link>
          <Link to="/periodselector">
            <button
              onClick={() => handleCategoryClick("1m")}
              className={selectedCategory === "1m" ? "selected" : ""}
            >
              1m
            </button>
          </Link>
          <Link to="/periodselector">
            <button
              onClick={() => handleCategoryClick("6m")}
              className={selectedCategory === "6m" ? "selected" : ""}
            >
              6m
            </button>
          </Link>
          <Link to="/periodselector">
            <button
              onClick={() => handleCategoryClick("1y")}
              className={selectedCategory === "1y" ? "selected" : ""}
            >
              1y
            </button>
          </Link>
        </div>
      </div>{" "}
    </nav>
  );
};

export default Navbar;
