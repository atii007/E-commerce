import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const mockData = [
  {
    country: "Pak",

    men: 96,
    menColor: "hsl(296, 70%, 50%)",
    women: 72,
    womenColor: "hsl(97, 70%, 50%)",
    kids: 140,
    kidsColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "IND",

    men: 28,
    menColor: "hsl(111, 70%, 50%)",
    women: 58,
    womenColor: "hsl(273, 70%, 50%)",
    kids: 29,
    kidsColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "BAN",

    men: 23,
    menColor: "hsl(96, 70%, 50%)",
    women: 34,
    womenColor: "hsl(106, 70%, 50%)",
    kids: 152,
    kidsColor: "hsl(256, 70%, 50%)",
  },
];

const BarCharts = () => {
  const chartSetting = {
    legend: false,
    sx: {
      [`.${axisClasses.label}`]: {
        transform: "translate(-10px, 0)",
      },
    },
  };

  return (
    <BarChart
      dataset={mockData}
      xAxis={[{ scaleType: "band", dataKey: "country", color: "#141414" }]}
      series={[
        {
          dataKey: "men",
          label: "Men",
          color: "#4cceac",
          type: "bar",
        },
        {
          dataKey: "women",
          label: "Women",
          color: "#db4f4a",
          type: "bar",
        },
        {
          dataKey: "kids",
          label: "Kids",
          color: "#6870fa",
          type: "bar",
        },
      ]}
      {...chartSetting}
    />
  );
};

export default BarCharts;
