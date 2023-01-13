import React, {useState} from "react";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";


export default function SmallCalendar( ) {
    // state lưu trữ ngày tháng hiện tại
    const [date, setDate] = useState(new Date());
    return(
        <div>
            <Flatpickr
                value={date}
                options={{
                    dateFormat: "d-m-Y"
                }}
                // event
                onChange={(dateSelect) => setDate(dateSelect)}
            />
        </div>
    );
};

