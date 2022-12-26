import React, { useEffect, useState } from "react";
import axios from "axios";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import PopupInfo from "../PopupInfo/PopupInfo";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { FaLeaf } from "react-icons/fa";


const CalendarContent = () => {

  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  //getAPI 
  const [schedules, setSchedules] = useState([]);
  const scheduleApi = "https://jsonplaceholder.typicode.com/posts"
  useEffect(() => {
    async function getScheduleData () {
      const res = await axios.get(scheduleApi);
      setSchedules(res.data);
      // console.log(res.data);
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
          
        eventClick={
          function (arg) {
            alert (arg.event.title);
          }
        }
        initialView="dayGridMonth"
        navLinks={true}
        selectable={true}
        events={[
          { title: 'iven', start: '2022-12-20T16:30:00', end: '2022-12-20T17:30:00' },
          { title: 'event 2', start: '2022-12-20T16:30:00', end: '2022-12-20T17:30:00' }
        ]}
      />

        <Tippy content={<div className="bg-slate-200 p-2 rounded-xl shadow-xl"><h2>Khach hang vjp</h2>
          <p>12/2/22, 9:30 AM - 12/2/22, 11:30 AM</p></div>} visible={visible} onClickOutside={hide}>
          <button onClick={visible ? hide : show}>Reference</button>
        </Tippy>

      
      
      
      

      <div className="mx-auto">
        <Link to="/booking">
          {/* <button className="w-15 h-12 rounded-3xl border-[1px] bg-[#a7705c] py-3 px-5 font-bold text-white duration-300 ease-in hover:border-[#a7705c] hover:bg-white hover:text-[#a7705c]">
            Booking now
          </button> */}
        </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarContent;
