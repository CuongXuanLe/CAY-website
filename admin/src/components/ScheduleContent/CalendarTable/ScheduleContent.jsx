import React, {useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Link, useNavigate } from "react-router-dom";
import Confirm from "../ConfirmUpdate/Confirm";
import axios from "axios";
import { Tooltip } from 'react-tooltip'
import moment from 'moment';

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
  }, []);
  // const navigate = useNavigate();
  const [tooltipContent, setTooltipContent] = useState("");
  const [isShowing, setIsShowing] = useState(false);
  const handleEventClick = (event, index) => {
    const start = event.event.extendedProps.formatted_start
    const end = event.event.extendedProps.formatted_end
    const date = event.event.extendedProps.formatted_created_at
    const note = event.event.extendedProps.note
    const id = event.event.id
    // const newStart = start.toLocaleTimeString();
    const newStart = moment(start, 'DD-MM-YYYY HH:mm');
    const timeStart = newStart.format('HH:mm');
    const newEnd = moment(end, 'DD-MM-YYYY HH:mm');
    const timeEnd = newEnd.format('HH:mm');
    // console.log(timeStart)
    setTooltipContent(
      <div className="w-full font-medium">
        <div className="flex justify-between">
          <div>
            <span className="font-bold">Customer:</span> {event.event.title}
          </div>
          <div>
            <p><span className="text-red-500 font-bold">Appointment Date: </span> {date}</p>
            <p><span className="text-red-500 font-bold">Time:</span> {timeStart} <span className="text-red-500 font-bold">to</span> {timeEnd}</p>
          </div> 
        </div>
        <div>
          <span className="font-bold">Note:</span>
          {note}
        </div>
        <br />
          <div className="flex justify-end ">
            <Link to={`/details/${id}`}><button className="w-20 border font-medium bg-[#a7705c] hover:bg-white hover:text-[#a7705c] hover:border-[#a7705c] text-white rounded">Update</button></Link>
            <button className="border border-red-600 px-3 ml-3 rounded text-red-600 hover:bg-red-600 hover:text-white" variant="danger" onClick={handleCloseButtonClick}>
                Close
            </button>
          </div>
      </div>
      );
    setIsShowing(!isShowing);
  };

  const handleCloseButtonClick = () => {
    setIsShowing(false);
  };

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
        timeZone="none"
        initialView="dayGridMonth"
        navLinks={true}
        selectable={true}
        events={formDetails}
        eventClick={handleEventClick}
      />

      {isShowing &&
            <Tooltip id="event-tooltip" effect="solid" place="top" className="absolute w-1/4 top-[50%] right-[20%] z-50 bg-white text-black font-bold px-3 py-2 rounded-md shadow-md">
              {tooltipContent}                    
            </Tooltip>
      }
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
              title={filterForm.title}
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
