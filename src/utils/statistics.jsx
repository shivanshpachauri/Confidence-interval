// import { useState } from "react";
// import React from "react";
// import * as d3 from "d3";
// import useConfidenceInterval from "../hooks/useConfidenceInterval";

// const CustomStats = ({filtereddata,headers}) => {
//   const [number, setNumber] = useState([]);
//   const [mean, setMean] = useState();
//   const [deviation, setDeviation] = useState();
//     // console.log(filtereddata.toString().split(",").map(Number));
    
//   // Pass mean, deviation, and data length to useConfidenceInterval
//   const { ci, calculateCI } = useConfidenceInterval(
//     mean,
//     deviation,
//     number.length,
//     // 50,
//     0.95
//   );
//   const extractNumericData = () => {
//     // Flatten the numeric values from each row and extract all numbers
//     const numericValues = filteredData.flatMap(row => {
//       // Iterate over all values in the row (object keys are column names)
//       return Object.values(row).map(value => {
//         const parsedValue = parseFloat(value);
//         // Only return values that can be converted into valid numbers
//         return !isNaN(parsedValue) ? parsedValue : null;
//       }).filter(value => value !== null); // Filter out non-numeric values
//     });

//     return numericValues;
//   };
//   // {filtereddata.forEach(element => {
//   //   // console.log( typeof element.Salary);
//   //    element = Object.values(element).map(item => parseInt(item));
//   //   // console.log(numArray);
//   //   console.log(element.length) 
//   // })
//   // }
//   // console.log( filtereddata[0].Salary);
    

//   // Calculate mean and deviation upon submitting the form
//   function handleSubmit(e) {
//     e.preventDefault();
//     const calculatedMean = d3.mean(number);
//     const calculatedDeviation = d3.deviation(number);
//     setMean(calculatedMean);
//     setDeviation(calculatedDeviation);
//     calculateCI(); // Trigger confidence interval calculation
//   }
//   const handleCsvSubmit = () => {
//     // Extract numeric data when the button is clicked
//     const numericData = extractNumericData();
//     setNumber(numericData);  // Update the state with the extracted numbers
//   };
//   return (
//     <>
//       <h1> Statistics</h1>
      
//       <form onSubmit={handleSubmit}>
//       <label>Input for statistics: </label>
//       <input
//           type="text"
//           onChange={(e) => {
//             setNumber(e.target.value.split(",").map(Number));
//           }}
//         />
//         <input type="submit" value="Submit" />
//         <button  style={{display:"block",textAlign:"center"}} onClick={handleCsvSubmit}> Submit csv</button>
//         <hr />
//         <label>
//           <strong>Mean: {mean}</strong>
//           <br />
//           <strong>Standard deviation: {deviation}</strong>
//           <br />
//           <strong>
//             Confidence Interval:{" "}
//             {ci
//               ? `[${ci[0].toFixed(2)}, ${ci[1].toFixed(2)}]`
//               : "Not calculated"}
//           </strong>
//         </label>
//       </form>
//     </>
//   );
// };

// export default CustomStats;
import { useState } from "react";
import React from "react";
import * as d3 from "d3";
import useConfidenceInterval from "../hooks/useConfidenceInterval";

const CustomStats = ({ filteredData, headers }) => {
  const [number, setNumber] = useState([]);
  const [mean, setMean] = useState();
  const [deviation, setDeviation] = useState();
console.log(filteredData);

  // Pass mean, deviation, and data length to useConfidenceInterval
  const { ci, calculateCI } = useConfidenceInterval(
    mean,
    deviation,
    number.length,
    0.95
  );
  // Extract numeric data from all columns dynamically
  const extractNumericData = () => {
    // Ensure filteredData is an array and not undefined or null
    if (!Array.isArray(filteredData) || filteredData.length === 0) {
      console.error("filteredData is either undefined or empty.");
      return [];  // Return an empty array if filteredData is invalid
    }
    // Flatten the numeric values from each row and extract all numbers
    const numericValues = filteredData.flatMap(row => {
      // Iterate over all values in the row (object keys are column names)
      return Object.values(row).map(value => {
        const parsedValue = parseFloat(value);
        // Only return values that can be converted into valid numbers
        return !isNaN(parsedValue) ? parsedValue : null;
      }).filter(value => value !== null); // Filter out non-numeric values
    });

    return numericValues;
  };
  // Handle CSV submit and process the data
  const handleCsvSubmit = () => {
    // Extract numeric data when the button is clicked
    const numericData = extractNumericData();
    setNumber(numericData);  // Update the state with the extracted numbers
  };
// Handle the form submit for custom statistics
function handleSubmit(e) {
  e.preventDefault();
  const calculatedMean = d3.mean(number);
  const calculatedDeviation = d3.deviation(number);
  setMean(calculatedMean);
  setDeviation(calculatedDeviation);
  calculateCI(); // Trigger confidence interval calculation
}
  return (
    <>
      <h1>Statistics</h1>
      
      <form onSubmit={handleSubmit}>
        <label>Input for statistics: </label>
        <input
          type="text"
          onChange={(e) => {
            setNumber(e.target.value.split(",").map(Number));
          }}
        />
        <input type="submit" value="Submit" />
      </form>

      {/* Button to submit the CSV data */}
      <center>
      <button style={{ display: "block", textAlign: "center" }} onClick={handleCsvSubmit}>
        Submit CSV
      </button>
      </center>
      <hr />
      <label>
        <strong>Mean: {mean}</strong>
        <br />
        <strong>Standard deviation: {deviation}</strong>
        <br />
        <strong>
          Confidence Interval:{" "}
          {ci
            ? `[${ci[0].toFixed(2)}, ${ci[1].toFixed(2)}]`
            : "Not calculated"}
        </strong>
      </label>
    </>
  );
};

export default CustomStats;
