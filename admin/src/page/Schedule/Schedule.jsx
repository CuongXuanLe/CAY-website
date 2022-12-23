import React from "react";

import { AdminNav, ScheduleContent } from "./../../components";

const Schedule = () => {
  return (
    <React.Fragment>
      <AdminNav />
      <div className="container ml-[14rem] p-10 pl-48 ">
        <strong className="text-3xl">Schedule</strong>
        <div className=" space-y-10 pt-10">
          <ScheduleContent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Schedule;
