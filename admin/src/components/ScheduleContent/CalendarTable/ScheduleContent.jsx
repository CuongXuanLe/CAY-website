import React, {useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Link } from "react-router-dom";
import Confirm from "../ConfirmUpdate/Confirm";
import axios from "axios";
//import tippy
import { tippy, } from "@tippyjs/react";
import 'tippy.js/themes/light.css';

const Schedule = () => {
  const [formDetails, getFormDetails] = useState([]);
  const url = "http://127.0.0.1:8000/api/get-schedule";
  const getListForm = async () => {
    const res = await axios.get(url).then(({data}) => {
      getFormDetails(data.data)
    })
  }
  useEffect(() => {
    getListForm()
  }, [])

  return (
    <React.Fragment>

      {/* Table of Calendar */}
      <div className="px-24">
      <React.Fragment>
      <div className="w-[85%] flex flex-col mx-auto ">
      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'title',
              right: 'prev,next today'
            }}
          
        eventMouseEnter={
          (arg) => {
            tippy(arg.el, {
              content: `<div>${arg.event.title}</div>
                        <div>${arg.event.start}</div>
              <a href="http://localhost:3000/details"><button><strong>Edit</strong><button></a>`,
              trigger: 'click',
              allowHTML: true,
              interactive: true,
              interactiveBorder: 30,
              theme: 'light',
              maxWidth: 500,
            })
          }}
        timeZone="none"
        initialView="dayGridMonth"
        navLinks={true}
        selectable={true}
        events={formDetails}
      />
      

      <div className="mx-auto mt-5">
        <Link to="/appointmentcreate">
          <button className="w-15 h-12 rounded-3xl border-[1px] bg-[#a7705c] py-3 px-5 font-bold text-white duration-300 ease-in hover:border-[#a7705c] hover:bg-white hover:text-[#a7705c]">
            Booking now
          </button>
        </Link>
        </div>
      </div>
    </React.Fragment>
      </div>

      {/* Confirm */}
      <div className="px-24">
        <h3 className="font-semibold">Confirm:</h3>
        <div className="mt-2">
        {
          formDetails.length > 0 &&
          formDetails.filter(formDetail => formDetail.approval === 0).map( filterForm => (
            <Confirm 
              key={filterForm.id}
              name={filterForm.name}
              date={filterForm.formatted_created_at}
              start={filterForm.formatted_start}
              end={filterForm.formatted_end}
              email={filterForm.email}
              birthDay={filterForm.formatted_birthday}
              phone={filterForm.phone}
              note={filterForm.note}
              approved={filterForm.approval}
              index={filterForm.id}
            />
          ))
        }
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Schedule;
