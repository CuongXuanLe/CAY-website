import React, { useEffect, useState } from "react";
import axios from "axios";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Link } from "react-router-dom"
import { Tooltip } from 'react-tooltip'

const CalendarContent = () => {
  const [schedules, setSchedules] = useState([]);
  const scheduleApi = "http://127.0.0.1:8000/api/get-schedule"
  useEffect(() => {
    async function getScheduleData () {
      const res = await axios.get(scheduleApi);
      setSchedules(res.data.data);
    }
    getScheduleData();
    document.title = "Schedule";
  },[]);
  const approvalBooking = schedules.filter(schedule => schedule.approval === 1)
  const [tooltipContent, setTooltipContent] = useState();
  const [isShowing, setIsShowing] = useState(false);
  const handleEventClick = (event) => {
    const start = event.event.start.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: 'Europe/London'
    });
    const end = event.event.end.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: 'Europe/London'
    });
    setTooltipContent(`Customer: ${event.event.title} Time: ${start} to ${end}`);
    setIsShowing(!isShowing);
  };

  const handleCloseButtonClick = () => {
    setIsShowing(false);
  };

  return (
    <>
    <div>
      <div className="w-[85%] relative flex flex-col mx-auto ">
        <FullCalendar 
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'title',
                right: 'prev,next today'
              }}
          timeZone="none"
          initialView="dayGridMonth"
          navLinks={true}
          // selectable={true}
          events={approvalBooking}
          eventClick={handleEventClick}
          eventClassNames={'event-relative'}
      />
      {isShowing && 
        <Tooltip id="event-tooltip" effect="solid" place="top" className="absolute z-50 top-[50%] left-[50%] bg-white text-black font-bold px-3 py-2 rounded-md shadow-md">
          {tooltipContent}
          <br />
          <button className="text-red-500" variant="danger" onClick={handleCloseButtonClick}>
              Close
          </button>
        </Tooltip>
      }
      <div className="mx-auto">
        <Link to="/booking">
          <button className="w-56 h-12 mt-4 rounded-3xl border bg-[#a7705c] py-3 px-5 font-bold text-white duration-300 ease-in hover:border-[#a7705c] hover:bg-white hover:text-[#a7705c]">
            Booking now
          </button>
        </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default CalendarContent;
