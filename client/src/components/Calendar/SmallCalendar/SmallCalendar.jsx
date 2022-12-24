import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { getMonth } from "../util";
import {
    AiOutlineCalendar,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
  } from "react-icons/ai";

export default function SmallCalendar() {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex , setSmallCalendarMonth, setDaySelected, daySelected } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx])

    function handlePrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1);
    }
    function handleNextMonth() {
        setCurrentMonthIdx(currentMonthIdx + 1);
    }
    function handleReset() {
        setCurrentMonthIdx(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
    }
    function getDayClass(day) {
        const format ="DD-MM-YY"
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        if(nowDay === currDay) {
            return 'bg-blue-500 rounded-full text-white';
        } else if(currDay === slcDay) {
            return "bg-blue-100 rounded-full text-blue-600 font-bold";
        } else {
            
        }
    }

    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    },[monthIndex]);

    return(
        <div>
            <div className="flex justify-between">
                <button className="rounded-full bg-[#a7705c] p-2 text-xl text-white hover:bg-[#8c5543] ease-in duration-150" onClick={handleReset}>
                    <AiOutlineCalendar />
                </button>

                <p className="ml-4 flex h-9 w-24 items-end text-lg font-bold">
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMM. YYYY")}
                </p>

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
            </div>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day, i) => (
                    <span key={i} className="text-sm py-1 text-center">
                        {day.format("dd").charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <button key={idx} onClick={() => {
                                setSmallCalendarMonth(currentMonthIdx);
                                setDaySelected(day)
                            }} className={`py-1 w-full ${getDayClass(day)}`}>
                                <span className="text-sm">{day.format('D')}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

