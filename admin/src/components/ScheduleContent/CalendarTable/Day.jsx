import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";

const Day = ({ day, rowIdx }) => {
  //Get Current Day
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full h-6 w-6"
      : "";
  }
  // console.log(day.format("DD-MM-YY"));

  return (
    <div className="flex flex-col border border-gray-200">
      <header className="flex h-[6rem] flex-col items-center">
        <div className={`w-full text-sm font-thin`}>
          <div className={`${getCurrentDayClass()} p-[3px]`}>
            <p>{day.format("DD")}</p>
            {day.format("DD-MM-YY") === "20-12-22" && (
              <Link to="/details">
                <button className="w-full bg-[#C38282] text-left font-light text-black">
                  10h-12h/YNi
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Day;
