import React from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import PopupInfo from "../PopupInfo/PopupInfo";
import { Link } from "react-router-dom";


const CalendarContent = () => {

  return (
    <React.Fragment>
      <div className="w-[85%] flex flex-col mx-auto ">
      <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2022-12-20' },
          { title: 'event 2', date: '2022-12-23' }
        ]}
      />
      
      {/* để đỡ chưa xử lí data  */}
      <PopupInfo /> 

      <div className="mx-auto">
        <Link to="/booking">
          <button className="w-15 h-12 rounded-3xl border-[1px] bg-[#a7705c] py-3 px-5 font-bold text-white duration-300 ease-in hover:border-[#a7705c] hover:bg-white hover:text-[#a7705c]">
            Booking now
          </button>
        </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarContent;
