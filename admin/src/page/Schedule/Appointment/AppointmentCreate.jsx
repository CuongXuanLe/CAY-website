import React from "react";
import { AdminNav, ScheduleBooking } from "../../../components";

const AppointmentCreate = () => {
  return (
    <React.Fragment>
      <div className="flex h-screen flex-row">
        <AdminNav />
        <div className="container ml-96 p-10">
          <strong className="text-3xl">Schedule</strong>
          <div className="h-full px-5 pt-10">
            <ScheduleBooking />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppointmentCreate;
