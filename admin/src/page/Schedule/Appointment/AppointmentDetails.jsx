import React from "react";
import { AdminNav, ScheduleDetails } from "../../../components";

const AppointmentDetails = () => {
    return(
        <React.Fragment>
            <div className="flex flex-row h-screen">
                <AdminNav />
                <div className="container p-10 ml-96">
                    <strong className="text-3xl">Schedule</strong>
                    <div className="px-5 pt-10 h-full">
                        <ScheduleDetails />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AppointmentDetails;