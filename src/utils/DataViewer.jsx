import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const DataViewer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Use fetch to load the CSV file dynamically
    fetch("/data/online_sales_dataset.csv")
      .then((response) => response.text()) // Get the file as text
      .then((csvText) => {
        // Parse the CSV text using Papa Parse
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setData(results.data);  // Store parsed data in state
          },
        });
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);

  return (
    <div>
      <h1>Data Viewer</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataViewer;
