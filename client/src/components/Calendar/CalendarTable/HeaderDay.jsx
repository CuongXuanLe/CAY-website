import React from "react";

const HeaderDay = ({ day, rowIdx }) => {
  return (
    <div className="">
      <header className="flex  items-center ">
        {rowIdx === 0 && (
          <p className="mt-1 text-sm font-thin">{day.format("ddd")}</p>
        )}
      </header>
    </div>
  );
};

export default HeaderDay;
