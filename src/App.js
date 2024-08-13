import React from "react";
import PriceTracker from "./components/PriceTracker";
import Navbar from "./components/Navbar";
import ViewControl from "./charts/ViewControl";
import StockChart from "./charts/StockChart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./components/Settings";
import AnalysisChart from "./charts/AnalysisChart";
import Statistic from "./charts/StatisticsChart";
import Summary from "./components/Summary";

function App() {
  return (
    <div>
      <BrowserRouter>
        <PriceTracker />
        <Navbar />
        <ViewControl />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Summary />
              </>
            }
          />
          <Route
            path="/summary"
            exact
            element={
              <>
                <Summary />
              </>
            }
          />
          <Route
            path="/chart"
            exact
            element={
              <>
                <StockChart />
              </>
            }
          />
          <Route
            path="/analysis"
            exact
            element={
              <>
                <AnalysisChart />
              </>
            }
          />
          <Route
            path="/statistics"
            exact
            element={
              <>
                <Statistic />
              </>
            }
          />
          <Route
            path="/settings"
            exact
            element={
              <>
                <Setting />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
