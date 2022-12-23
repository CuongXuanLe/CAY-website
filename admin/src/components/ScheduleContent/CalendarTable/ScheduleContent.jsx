import React, { useState, useContext, useEffect } from "react";
import Month from "./Month";
import { getMonth } from "../util";
import CalendarHeader from "./CalendarHeader";
import GlobalContext from "../../../context/GlobalContext";
import Confirm from "../ConfirmUpdate/Confirm";

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
      <div className="px-24">
        <Month month={currentMonth} />
      </div>

      {/* Confirm */}
      <div className="px-24">
        <h4>Confirm</h4>
        <div>
          <Confirm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Schedule;
