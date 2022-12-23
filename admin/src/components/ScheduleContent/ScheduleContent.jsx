import React, { useState, useContext, useEffect } from "react";
import Month from "./Month";
import { getMonth } from "../../util";
import CalendarHeader from "./CalendarHeader";
import GlobalContext from "../../context/GlobalContext";

const Schedule = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <div>
        <CalendarHeader />
      </div>

      {/* Table of Calendar */}
      <div className="w-[80%]">
        <Month month={currentMonth} />
      </div>
    </React.Fragment>
  );
};

export default Schedule;
