import React, { useEffect, useState } from "react";
import axios from "axios";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Link } from "react-router-dom"

const CalendarContent = () => {

  //getAPI 
  const [schedules, setSchedules] = useState([]);
  const scheduleApi = "http://127.0.0.1:8000/api/get-schedule"
  useEffect(() => {
    async function getScheduleData () {
      const res = await axios.get(scheduleApi);
      setSchedules(res.data.data);
    }
    getScheduleData();
  },[]);

  


  return (
    <React.Fragment>
      <div className="w-[85%] flex flex-col mx-auto ">
        <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'title',
              right: 'prev,next today'
            }}
        timeZone="none"
        initialView="dayGridMonth"
        navLinks={true}
        selectable={true}
        events={schedules}
      />

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
