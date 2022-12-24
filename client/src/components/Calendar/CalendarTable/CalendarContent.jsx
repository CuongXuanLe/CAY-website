import React, { useState, useContext, useEffect } from "react";
import Month from "./Month";
import { getMonth } from "../util";
import CalendarHeader from "./CalendarHeader";
import GlobalContext from "../../../context/GlobalContext";
import { Link } from "react-router-dom";

const CalendarContent = () => {
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

      <div className="my-10 flex justify-center items-center">
        <Link to="/booking">
          <button className=" h-14 rounded-3xl border-[1px] bg-[#a7705c] py-3 px-5 font-bold text-white duration-300 ease-in hover:border-[#a7705c] hover:bg-white hover:text-[#a7705c]">
            Booking now
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CalendarContent;
