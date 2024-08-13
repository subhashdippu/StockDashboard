import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Label,
  LabelList,
} from "recharts";

// Sample data
const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
];

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
  const lastDataPoint = data[data.length - 1];

  return (
    <div style={{ width: "100%", height: 400 }}>
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
                if (value === lastDataPoint.value) {
                  return (
                    <text
                      x={x}
                      y={y}
                      dy={-10}
                      fill="#8884d8"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {`Last Value: ${value}`}
                    </text>
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
