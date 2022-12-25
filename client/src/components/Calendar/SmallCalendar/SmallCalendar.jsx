import React, {useState} from "react";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";


export default function SmallCalendar() {
    // state lưu trữ ngày tháng hiện tại
    const [date, setDate] = useState(new Date());

    return(
        <div>
            <Flatpickr
                value={date} // giá trị ngày tháng
                // các option thêm cho thư viện
                options={{
                    dateFormat: "d-m-Y" // format ngày giờ
                }}
                // event
                onChange={(dateSelect) => setDate(dateSelect)}
            />
        </div>
    );
};

