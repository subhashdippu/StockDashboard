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

const NasaAreaLineChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const numPoints = 100;
        const dates = Array.from(
          { length: numPoints },
          (_, i) => `2024-08-${String(i + 1).padStart(2, "0")}`
        );
        const values = Array.from(
          { length: numPoints },
          () => Math.random() * 100
        );

        setChartData({
          labels: dates,
          datasets: [
            {
              label: "Example Dataset",
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
                gradient.addColorStop(1, "#E8E7FF");
                gradient.addColorStop(0, "#FFFFFF");

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
                  xMin: 16.5,
                  xMax: 16.5,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
                line2: {
                  type: "line",
                  xMin: 33,
                  xMax: 33,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
                line3: {
                  type: "line",
                  xMin: 49.5,
                  xMax: 49.5,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
                line4: {
                  type: "line",
                  xMin: 66,
                  xMax: 66,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
                line5: {
                  type: "line",
                  xMin: 82.5,
                  xMax: 82.5,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
                lineEnd: {
                  type: "line",
                  xMin: 99,
                  xMax: 99,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                },
                bottomLine: {
                  type: "line",
                  yMin: 0,
                  yMax: 0,
                  borderColor: "#E2E4E7",
                  borderWidth: 1,
                  borderDash: [5, 5],
                },
              },
            },
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
        }}
      />
      <div className="value-box">Average: {averageValue.toFixed(2)}</div>
    </div>
  );
};

export default NasaAreaLineChart;
