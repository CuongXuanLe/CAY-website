import React from "react";
import Day from "./Day";

const Month = ({ month }) => {
  return (
    <div className="grid flex-1 grid-cols-7 grid-rows-5 ">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
