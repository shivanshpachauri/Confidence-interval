import React from "react";

const Headings = ({ title, paragraph }) => {
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <a href="https://www.scribbr.com/statistics/confidence-interval/#:~:text=A%20confidence%20interval%20is%20the,another%20way%20to%20describe%20probability.">
          Confidence Interval Reference
        </a>
        <p>
          The confidence interval is the range of values that you expect your
          estimate to fall between a certain percentage of the time
        </p>
      </header>
    </article>
  );
};

export default Headings;
