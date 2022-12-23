import React from "react";
import { AdminNav, ScheduleEdit } from "../../../components";

const AppointmentDetails = () => {
  return (
    <React.Fragment>
      <div className="flex h-screen flex-row">
        <AdminNav />
        <div className="container ml-96 p-10">
          <strong className="text-3xl">Schedule</strong>
          <div className="h-full px-5 pt-10">
            <ScheduleEdit />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppointmentDetails;
