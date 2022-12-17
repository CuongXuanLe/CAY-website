
import React from "react";

const HeaderDay = ({ day, rowIdx }) => {
  return (
    <div className=" border">
      <header className="flex  items-center ">
        {rowIdx === 0 && (
          <p className="mt-1 text-sm ">{day.format("ddd").toUpperCase()}</p>
        )}
      </header>
    </div>
  );
};

export default HeaderDay;