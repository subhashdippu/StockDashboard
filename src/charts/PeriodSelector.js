import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "./css/Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
  annotationPlugin
);

const NASA_NEO_API_URL = "https://api.nasa.gov/neo/rest/v1/feed";
const API_KEY = process.env.NASA_API_KEY;

const NasaAreaLineChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const response = await fetch(
          `${NASA_NEO_API_URL}?start_date=2024-08-01&end_date=2024-08-07&api_key=${API_KEY}`
        );
        const data = await response.json();

        const dates = Object.keys(data.near_earth_objects);
        const values = dates.map(
          (date) => data.near_earth_objects[date].length
        );

        setChartData({
          labels: dates,
          datasets: [
            {
              label: "NEOs Detected",
              data: values,
              fill: true,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                  return null;
                }

                const gradient = ctx.createLinearGradient(
                  0,
                  chartArea.bottom,
                  0,
                  chartArea.top
                );
                gradient.addColorStop(0, "#E8E7FF");
                gradient.addColorStop(1, "#FFFFFF");

                return gradient;
              },
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data", err);
        setLoading(false);
      }
    };

    fetchNasaData();
  }, []);

  if (loading) return <p>Loading...</p>;

  const averageValue = chartData.datasets
    ? chartData.datasets[0].data.reduce((sum, val) => sum + val, 0) /
      chartData.datasets[0].data.length
    : 0;

  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
            annotation: {
              annotations: {
                lineStart: {
                  type: "line",
                  xMin: 0,
                  xMax: 0,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
                line1: {
                  type: "line",
                  xMin: 1.5,
                  xMax: 1.5,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
                line2: {
                  type: "line",
                  xMin: 3,
                  xMax: 3,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
                lineEnd: {
                  type: "line",
                  xMin: 6,
                  xMax: 6,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
              },
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
            },
            y: {
              display: true,
              grid: {
                display: false,
              },
            },
          },
        }}
      />
      <div
        className="value-box"
        style={{ position: "absolute", top: "10px", right: "10px" }}
      >
        Average: {averageValue.toFixed(2)}
      </div>
    </div>
  );
};

export default NasaAreaLineChart;
