import React from "react";
import { Link } from "react-router-dom";

const ScheduleDetails = () => {

  return (
    <React.Fragment>
      <div className="relative h-full w-full">
        <h3>Appointment Details</h3>
        <div className="px-10 py-5 ">
          <p className="mt-2">
            <span className="font-bold">Customer:</span>
            Hailey
          </p>
          <p className="mt-2">
            <span className="font-bold text-red-600">Appointment Date:</span>{" "}
            10/12/2022{" "}
            <span className="ml-4 font-bold text-red-600">Time:</span> 9h30 to
            11h30
          </p>
          <p className="mt-2">
            <span className="font-bold">Date of Birth: </span>02/10/1999
          </p>
          <p className="mt-2">
            <span className="font-bold">Phone: </span>0999 999 999
          </p>
          <p className="mt-2">
            <span className="font-bold">Email: </span>
            hailey.melbourne@gmail.com
          </p>
          <p className="mt-2">
            <span className="font-bold">Note: </span>
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
