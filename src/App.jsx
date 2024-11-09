// import DataViewer from "./utils/DataViewer.jsx";
import DataViewer2 from "./utils/DataViewer2.jsx";
import { useState } from "react";
import "./styles.css";
import Headings from "./Header.jsx";
import Footings from "./Footer.jsx";
import ChartContainer from "./utils/ChartContainer.jsx";
import CustomStats from "./utils/statistics.jsx";
export default function App() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log(filteredData);
  
  return (
    <div className="App">
      <Headings
        title="Confidence Interval"
        paragraph="To calculate Confidence Interval"
      />
      <hr />
      <DataViewer2
       data={data}
       setData={setData}
       headers={headers}
       setHeaders={setHeaders}
       filteredData={filteredData}
       setFilteredData={setFilteredData}
       />
      <hr/>
      <CustomStats
      filteredData={filteredData}
      headers={headers}
      />
      <hr />
      <br />
      <ChartContainer />
      {/* <LineGraph /> */}
      <br />
      <hr />
      <Footings
        footertitle="Confidence Interval"
        footerpara="Key website for calculating confidence interval"
      />
      <hr />
    </div>
  );
}
