import React from "react";

export const Rating = ({ stars }) => (
  <React.Fragment>
    {[0, 1, 2, 3, 4, 5].map((num) => (
      <svg key={num} height="21" width="22">
        <polygon
          points="10,1 4,19 19,7 1,7 16,19"
          style={num <= stars ? { fill: "lime" } : { fill: "grey" }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    ))}
  </React.Fragment>
);
