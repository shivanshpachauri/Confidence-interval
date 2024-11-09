import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import fakedata from "./fake_data.jsx";
ChartJS.register(Tooltip, Legend, ArcElement);

const PieChart = ({ upperconfidence, lowerconfidence }) => {
  const options = { alignItems: "center", responsive: true };
  const data = fakedata.piedata(upperconfidence, lowerconfidence);

  return (
    <div
      style={{
        display: "inline-flex",
        height: "500px",
        width: "700px",
        alignItems: "center",
      }}
    >
      <h1>PieChart data</h1>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
