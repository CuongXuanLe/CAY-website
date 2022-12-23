import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import {
  AiOutlineCalendar,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import dayjs from "dayjs";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  return (
    <header className="flex items-center py-1">
      <div className="rounded-full bg-[#a7705c] p-2 text-xl text-white">
        <AiOutlineCalendar />
      </div>

      <div className="ml-4 mt-3 flex h-9 w-24 items-end text-lg font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMM. YYYY")}
      </div>

      <div className="ml-2 flex h-9 items-end text-lg">
        <button
          className="border-[1px] border-[#a7705c] px-3 py-0.5 text-[#a7705c] duration-300 ease-in hover:bg-[#a7705c] hover:text-white"
          onClick={handlePrevMonth}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className="border-[1px] border-l-0 border-[#a7705c] px-3 py-0.5 text-[#a7705c] duration-300 ease-in hover:bg-[#a7705c] hover:text-white"
          onClick={handleNextMonth}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </header>
  );
};

export default CalendarHeader;
