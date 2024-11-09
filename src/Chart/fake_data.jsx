const LineChartData = (uppercon, lowercon) => {
  return {
    labels: [],
    datasets: [
      // {
      //   label: "Main Data",
      //   data: [10, 20, 15, 30, 25],
      //   borderColor: "green",
      //   borderWidth: 3,
      //   pointRadius: 5,
      //   fill: false,
      // },
      {
        label: "Upper Confidence Interval",
        // data: [12, 22, 17, 32, 27],
        data: [uppercon],
        borderColor: "red",
        borderWidth: 3,
        pointRadius: 5,
        fill: "+1", // This fills the area between this line and the next
      },
      {
        label: "Lower Confidence Interval",
        // data: [8, 18, 13, 28, 23],
        data: [lowercon],
        borderColor: "blue",
        borderWidth: 3,
        pointRadius: 5,
        fill: false,
      },
    ],
  };
};
const piedata = (uppercon, lowercon) => {
  return {
    labels: ["uppercon : ", "lowercon : "], // Changed to array
    datasets: [
      {
        label: ["uppercon", "lowercon"],
        data: uppercon, lowercon,
        backgroundColor: [
          "rgba(75,192,192,1)",
          //   &quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
};

export default { piedata, LineChartData };
