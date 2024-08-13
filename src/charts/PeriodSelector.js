import React, { useEffect, useState, useRef } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import "./css/Chart.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const AreaLineChart = () => {
  const [data, setData] = useState([]);
  const [lastPointPosition, setLastPointPosition] = useState({ x: 0, y: 0 });
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [
          { name: "Jan", value: 400 },
          { name: "Feb", value: 300 },
          { name: "Mar", value: 200 },
          { name: "Apr", value: 278 },
          { name: "May", value: 189 },
          { name: "Jun", value: 239 },
          { name: "Jul", value: 349 },
          { name: "Aug", value: 210 },
          { name: "Sep", value: 290 },
          { name: "Oct", value: 310 },
          { name: "Nov", value: 220 },
          { name: "Dec", value: 400 },
        ];
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();

    const chartElement = chartRef.current;
    if (chartElement) {
      const chartWidth = chartElement.clientWidth;
      const chartHeight = chartElement.clientHeight;
      const lastPointX = chartWidth - 50;
      const lastPointY = 50;
      setLastPointPosition({ x: lastPointX, y: lastPointY });
    }
  }, []);

  const lastDataPoint = data[data.length - 1];

  return (
    <div className="chart-container" ref={chartRef}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fillOpacity={0.3}
            fill="#8884d8"
          >
            <LabelList
              dataKey="value"
              position="end"
              content={({ x, y, value }) => {
                if (value === lastDataPoint?.value) {
                  return (
                    <foreignObject
                      x={x - 30}
                      y={y - 30}
                      width="100"
                      height="50"
                    ></foreignObject>
                  );
                }
                return null;
              }}
            />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaLineChart;
