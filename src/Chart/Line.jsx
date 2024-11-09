import React from "react";
import { Line } from "react-chartjs-2";
import fake_data from "./fake_data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ upperconfidence, lowerconfidence }) => {
  const options = {
    scale: {
      pointLabels: {
        fontStyle: "bold",
      },
    },
    maintainAspectRatio: false,
  };
  // Chart.defaults.global.defaultFontStyle = 'italic'
  // const data = fake_data.LineChartData(upperconfidence, lowerconfidence);
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Upper Confidence Interval",
        data: upperconfidence,
        borderColor: "red",
        borderWidth: 3,
        pointRadius: 5,
        fill: "+1",
      },
      {
        label: "Lower Confidence Interval",
        data: lowerconfidence,
        borderColor: "blue",
        borderWidth: 3,
        pointRadius: 5,
        fill: false,
      },
    ],
  };

  return (
    <div
      style={{
        display: "inline-flex",
        height: "500px",
        width: "700px",
        alignItems: "center",
      }}
    >
      <h1> Line Chart Data </h1>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineGraph;
