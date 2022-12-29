import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ScheduleDetails = () => {

  const [appointmentDetails, getAppointmentDetails] = useState([]);
  // const url = `http://127.0.0.1:8000/api/schedule/1`;
  useEffect(() => {
    const getBookData = async (id) => {
      const res = await axios.get(`http://127.0.0.1:8000/api/schedule/1`);
      getAppointmentDetails(res.data);
      console.log(res.data)
    }
    getBookData();
  }, []);

  return (
    <React.Fragment>
      <div className="relative h-full w-full">
        <h3>Appointment Details</h3>
        <div className="px-10 py-5 ">
          <p className="mt-2">
            <span className="font-bold">Customer: </span>
            {appointmentDetails.title}
          </p>
          <p className="mt-2">
            <span className="font-bold text-red-600">Appointment Date: </span>
            {appointmentDetails.formatted_created_at}
            <span className="ml-4 font-bold text-red-600">Time: </span>{appointmentDetails.formatted_start} to {appointmentDetails.formatted_end}
          </p>
          <p className="mt-2">
            <span className="font-bold">Date of Birth: </span>{appointmentDetails.birthday}
          </p>
          <p className="mt-2">
            <span className="font-bold">Phone: </span>{appointmentDetails.phone}
          </p>
          <p className="mt-2">
            <span className="font-bold">Email: </span>
            {appointmentDetails.email}
          </p>
          <p className="mt-2">
            <span className="font-bold">Note: </span>
            <br />
            {appointmentDetails.note}
          </p>
        </div>
        <div className="absolute right-1 bottom-5">
          <Link to="/appointmentedit">
            <button className="w-20 border-[1px] border-black  duration-150 ease-in hover:bg-black hover:text-white">
              Update
            </button>
          </Link>
          <button className="ml-4 w-20 border-[1px] border-red-600 text-red-600 duration-150 ease-in hover:bg-red-600 hover:text-white">
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScheduleDetails;
