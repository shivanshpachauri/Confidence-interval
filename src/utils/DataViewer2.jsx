// import React, { useState } from 'react';
// import Papa from 'papaparse';

// const DataCleansingComponent = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   // Function to handle CSV file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       Papa.parse(file, {
//         complete: (result) => {
//           // Parse the data into rows and columns
//           const rows = result.data;
//           console.log(rows);
          
//           // You can clean or filter data here
//           const cleanedData = cleanData(rows);
//           setData(cleanedData);
//           setFilteredData(cleanedData);
//         },
//         header: true, // Consider the first row as header
//         skipEmptyLines: true, // Skip empty rows
//       });
//     }
//   };

//   // Function to clean the data
//   const cleanData = (rows) => {
//     return rows
//       .filter(row => row['0'] !== String && row['ColumnName'] !== '') // Filter out rows based on some condition
//       .map(row => ({
//         // Format the data (e.g., trimming strings, converting to numbers, etc.)
//         column1: row['Age'] ? row['Age'].trim() : '',
//         column2: row['Gender'] ? (row['Gender']).toString() : 0,
//         column3: row['Caffeine_Intake'] ? row['Caffeine_Intake'].toUpperCase() : '',
//       }));
//   };

//   // Displaying the filtered data
//   return (
//     <div>
//       <input type="file" accept=".csv" onChange={handleFileUpload} />
//       <table>
//         <thead>
//           <tr>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Caffeine inTake</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((row, index) => (
//             <tr key={index}>
//               <td>{row.column1}</td>
//               <td>{row.column2}</td>
//               <td>{row.column3}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataCleansingComponent;
import React from 'react';
import Papa from 'papaparse';

const DataCleansingComponent = ({
      data,
       setData,
       headers,
       setHeaders,
       filteredData,
       setFilteredData
}) => {

  // Function to handle CSV file upload
  const handleFileUpload = (e) => {
    // console.log(e);
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          // Parse the data into rows and columns
          const rows = result.data;
          // console.log(rows);

          // Capture headers dynamically from the CSV file
          const headers = result.meta.fields;
          setHeaders(headers);

          // Clean and filter data dynamically
          const cleanedData = cleanData(rows, headers);
          setData(cleanedData);
          setFilteredData(cleanedData);
        },
        header: true, // Treat the first row as headers
        skipEmptyLines: true, // Skip empty rows
      });
    }
  };
  // console.log(filteredData)
  // console.log( filteredData)
  // Function to clean the data dynamically
  const cleanData = (rows, headers) => {
    return rows
      .filter(row => Object.values(row).some(value => value !== '')) // Filter out empty rows
      .map(row => {
        // Clean each field in the row
        const cleanedRow = {};
        headers.forEach(header => {
          cleanedRow[header] = row[header] ? row[header].toString().trim() : '';
        });
        return cleanedRow;
      });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataCleansingComponent;
