import React from "react";
import Day from "./Day";
import HeaderDay from "./HeaderDay";

const Month = ({ month }) => {
  return (
    <>
      <div className="mb-2 grid flex-1 grid-cols-7 grid-rows-1">
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <HeaderDay day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="grid w-full flex-1 grid-cols-7 grid-rows-6">
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Month;
