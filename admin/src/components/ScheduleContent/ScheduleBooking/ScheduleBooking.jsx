import React from "react";
import { Link } from "react-router-dom";

const ScheduleBooking = () => {
  return (
    <React.Fragment>
      <div className="relative h-full w-full">
        <h3>Appointment Details</h3>
        <div className="px-10 py-5 ">
          <div className="mt-2 flex">
            <span className="font-bold">Customer:</span>
            <input className="ml-3 w-full border-[1px] border-black"></input>
          </div>
          <div className="mt-2 flex">
            <div className="flex w-[60%]">
              <span className="font-bold text-red-600 ">Appointment Date:</span>
              <input className="ml-3 w-[60%] border-[1px] border-black"></input>
            </div>
            <div className=" flex w-[40%]">
              <span className="font-bold text-red-600 ">Time:</span>
              <input className="ml-3 w-full border-[1px] border-black"></input>
            </div>
          </div>
          <div className="mt-2 flex">
            <span className="font-bold">Date of birth (optional):</span>
            <input className="ml-3 w-[79.7%] border-[1px] border-black"></input>
          </div>
          <div className="mt-2 flex">
            <span className="font-bold">Phone:</span>
            <input className="ml-3 w-full border-[1px] border-black"></input>
          </div>
          <div className="mt-2 flex">
            <span className="font-bold">Email (optional):</span>
            <input className="ml-3 w-[85.6%] border-[1px] border-black"></input>
          </div>
          <div className="mt-2 flex flex-col">
            <span className="font-bold">Note:</span>
            <textarea className="w-full border-[1px] border-black"></textarea>
          </div>
        </div>
        <div className="absolute right-1 bottom-5">
          <Link to="/schedule">
            <button className="w-20 border-[1px] border-black  duration-150 ease-in hover:bg-black hover:text-white">
              Cancel
            </button>
          </Link>
          <button className="ml-4 w-20 border-[1px] border-green-500 text-green-500 duration-150 ease-in hover:bg-green-500 hover:text-white">
            Create
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScheduleBooking;
