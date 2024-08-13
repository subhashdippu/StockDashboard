import React, { useState } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("summary");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="navbar">
      <div className="categories">
        <Link
          to="/summary"
          onClick={() => handleCategoryClick("summary")}
          className={selectedCategory === "summary" ? "active" : ""}
          aria-current={selectedCategory === "summary" ? "page" : undefined}
        >
          Summary
        </Link>
        <Link
          to="/chart"
          onClick={() => handleCategoryClick("chart")}
          className={selectedCategory === "chart" ? "active" : ""}
          aria-current={selectedCategory === "chart" ? "page" : undefined}
        >
          Chart
        </Link>
        <Link
          to="/statistics"
          onClick={() => handleCategoryClick("statistics")}
          className={selectedCategory === "statistics" ? "active" : ""}
          aria-current={selectedCategory === "statistics" ? "page" : undefined}
        >
          Statistics
        </Link>
        <Link
          to="/analysis"
          onClick={() => handleCategoryClick("analysis")}
          className={selectedCategory === "analysis" ? "active" : ""}
          aria-current={selectedCategory === "analysis" ? "page" : undefined}
        >
          Analysis
        </Link>
        <Link
          to="/settings"
          onClick={() => handleCategoryClick("settings")}
          className={selectedCategory === "settings" ? "active" : ""}
          aria-current={selectedCategory === "settings" ? "page" : undefined}
        >
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
