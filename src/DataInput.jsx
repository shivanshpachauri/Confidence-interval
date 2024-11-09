import { useState } from "react";
import React from "react";

const Datainputing = ({ uppercon, lowercon, onDataUpdate }) => {
  const [upperconfidence, setupper] = useState([]);
  const [lowerconfidence, setlower] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    onDataUpdate(upperconfidence, lowerconfidence); // Pass the updated data to the parent
    console.log(upperconfidence, lowerconfidence);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">{uppercon} : </label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => {
            setupper(e.target.value.split(",").map(Number));
          }}
        />
        <br />
        <label htmlFor="lname">{lowercon} : </label>

        <input
          type="text"
          id="lname"
          name="lname"
          onChange={(e) => {
            setlower(e.target.value.split(",").map(Number));
          }}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Datainputing;
