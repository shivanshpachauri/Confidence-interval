import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register required components for Chart.js
Chart.register(...registerables);

const Bardata = ({ upperconfidence, lowerconfidence }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        height: "500px",
        width: "700px",
        alignItems: "center",
      }}
    >
      <h1>Bardata</h1>
      <Bar
        data={{
          labels: ["uppercon", "lowercon"],
          datasets: [
            {
              label: "Total Count/Value",
              data: [upperconfidence, lowerconfidence],
              backgroundColor: ["aqua", "green", "red", "yellow"],
              borderColor: ["aqua", "green", "red", "yellow"],
              borderWidth: 0.5,
            },
          ],
        }}
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 15,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Bardata;
