import React from "react";
import "./css/Summary.css";
const Summary = () => {
  return (
    <div className="summary">
      This project includes a React-based Navbar component that enables
      navigation between sections like Summary, Chart, Statistics, Analysis, and
      Settings. It features state management for category selection and sorting
      options, improving user interaction. The component leverages
      react-router-dom for routing and is styled with a custom CSS file for
      consistency. Additionally, it integrates an API call to Alpha Vantage for
      fetching stock data, displaying this data within the Chart section. This
      integration enhances the Navbar by dynamically providing up-to-date stock
      information alongside user navigation and sorting functionalities.
    </div>
  );
};

export default Summary;
