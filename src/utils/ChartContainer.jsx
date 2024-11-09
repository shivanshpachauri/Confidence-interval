import React, { useState } from "react";
import Datainputing from "../DataInput.jsx"; // Adjust the import path as necessary
import LineGraph from "../Chart/Line.jsx";
import Bardata from "../Chart/Bar.jsx"; // Adjust the import path as necessary
import fake_data from "../Chart/fake_data.jsx"; // Adjust the import path as necessary
import PieChart from "../Chart/Pie.jsx";
const ChartContainer = () => {
  const [upperconfidence, setupper] = useState([]);
  const [lowerconfidence, setlower] = useState([]);

  const handleDataUpdate = (upperData, lowerData) => {
    setupper(upperData);
    setlower(lowerData);
    fake_data.uppercon = upperData; // Update the fake_data object
    fake_data.lowercon = lowerData;
  };

  return (
    <div>
      <Datainputing
        uppercon="Upper Confidence"
        lowercon="Lower Confidence"
        onDataUpdate={handleDataUpdate}
      />
      <hr />

      <Bardata
        upperconfidence={upperconfidence}
        lowerconfidence={lowerconfidence}
      />

      <hr />
      <LineGraph
        upperconfidence={upperconfidence}
        lowerconfidence={lowerconfidence}
      />
      <hr />
    <div className="container"style={{display:"inline-flex", height:"500px",width:"700px",alignItems:"center"}}>
      <PieChart
        upperconfidence={upperconfidence}
        lowerconfidence={lowerconfidence}
      /></div>
    </div>
  );
};

export default ChartContainer;
