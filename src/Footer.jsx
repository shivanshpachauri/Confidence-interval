import React from "react";
import "./footerstyle.css";
const Footings = ({ footertitle, footerpara, email }) => {
  return (
    <article>
      <footer>
        <p>{footertitle}</p>
        <a href="https://www.cuemath.com/confidence-interval-formula/">
          {" "}
          Confidence interval key reference
        </a>
        <p>
          {footerpara}
          <a href="mailto:hege@example.com">{email}</a>
        </p>
      </footer>
    </article>
  );
};

export default Footings;
