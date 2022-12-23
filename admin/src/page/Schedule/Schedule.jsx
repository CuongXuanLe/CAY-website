import React from "react";

import {AdminNav, ScheduleContent } from './../../components';

const Schedule = () => {
    return(
        <React.Fragment>
            <AdminNav />
            <div className="container p-10 ml-96">
                <strong className="text-3xl">Schedule</strong>
                <div className=" pt-10 space-y-10">
                    <ScheduleContent />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Schedule;