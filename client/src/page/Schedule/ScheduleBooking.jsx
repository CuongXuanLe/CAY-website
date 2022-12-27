import React, {useState, useEffect} from "react";
import { BookingSuccess } from "../../components";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";

import axios from "axios";
const ScheduleBooking = () => {
    const [title, getTitle] = useState();
    const [birthday, getBirthday] = useState();
    const [phone, getPhone] = useState();
    const [email, getEmail] = useState();
    const [note, getNote] = useState();
    const [date, getDate] = useState(new Date());
    const [startTime, getTimeStart] = useState();
    const [endTime, getTimeEnd] = useState();
    const [success, setSuccess] = useState();

    const CreateBooking = async (e) => {
        e.preventDefault();
        setSuccess(false);
        const url = "http://127.0.0.1:8000/api/schedule";
        const formData = {
            title: title,
            phone: phone,
            birthday: birthday,
            email: email,
            note: note,
            created_at: date,
            start: startTime,
            end: endTime,
        }
        await axios
            .post(url, formData)
            .then((res) => {
                setSuccess(true);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <React.Fragment>
            <div className="h-auto w-full px-14 pt-28 flex justify-center items-center flex-col">
                {/* Enter Info */}
                <div className="bg-[#CD9F9F] w-[80%] h-auto p-10 pt-5 rounded-2xl flex ">
                    <div className="w-[50%] leading-8">
                        <h3 className="mb-3 font-bold">Infomation</h3>
                        <div>
                            <p className="mb-2">Full name <span className="text-red-600">*</span></p>
                            <input 
                                placeholder="Enter full name"
                                value={title || ''}
                                onChange={(event) => {getTitle(event.target.value)}}
                                className="w-[70%] outline-none rounded px-2"></input>
                        </div>
                        <div>
                            <p className="mb-2">Birthday</p>
                            <input
                                placeholder="Enter your birthday"
                                value={birthday || ''}
                                onChange={(event) => {getBirthday(event.target.value)}} 
                                className="w-[70%] outline-none rounded px-2"></input>
                        </div>
                        <div>
                            <p className="mb-2">Phone number <span className="text-red-600">*</span></p>
                            <input
                            type="number"
                            placeholder="Enter Phone Number"
                            value={phone || ''}
                            onChange={(event) => {getPhone(event.target.value)}}
                            className="w-[70%] outline-none rounded px-2"></input>
                        </div>
                        <div>
                            <p className="mb-2">Email</p>
                            <input
                            type="email"
                            placeholder="Enter email address"
                            value={email || ''}
                            onChange={(event) => {getEmail(event.target.value)}}
                            className="w-[70%] outline-none rounded px-2"></input>
                        </div>
                        <div>
                            <p className="mb-2">Note</p>
                            <textarea
                            placeholder="Type your notes here"
                            value={note || ''}
                            onChange={(event) => {getNote(event.target.value)}}
                            className="w-[70%] outline-none rounded px-2"></textarea>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        {/* Small Calendar */}
                        <h3 className="mb-2 font-bold">Date<span className="text-red-600">*</span></h3>
                        {/* <SmallCalendar value={date} onChange={(event) => {getDate(event.target.value)}} /> */}
                        <Flatpickr
                            value={date}
                            onChange={(selectedDates) => {getDate(selectedDates[0])}}
                        />
                    <div>
                            <h3 className="font-bold mt-3">Time <span className="text-red-600">*</span> </h3>
                            <div className="flex justify-between w-[30%]">
                                <input
                                placeholder="8:30"
                                value={startTime || ''}
                                onChange={(event) => {getTimeStart(event.target.value)}}
                                className="text w-16 px-2 rounded"></input>
                                <p className="mx-1">to</p>
                                <input
                                placeholder="9:30"
                                value={endTime || ''}
                                onChange={(event) => {getTimeEnd(event.target.value)}}
                                className="text w-16 px-2 rounded"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <button className="text-[#CD9F9F] text-2xl rounded-2xl border-2 border-[#CD9F9F] w-[20vh] h-auto py-2 hover:bg-[#CD9F9F] hover:text-white  duration-150 ease-in">Cancel</button>
                    <button type="submit" onClick={(event) => CreateBooking(event)} className="text-[#CD9F9F] text-2xl rounded-2xl border-2 border-[#CD9F9F] w-[20vh] h-auto py-2 hover:bg-[#CD9F9F] hover:text-white  duration-150 ease-in ml-10">Book</button>
                </div>
                {success && <div className="w-full flex items-center justify-center">
                    <BookingSuccess />
                </div>}
                
            </div>
        </React.Fragment>
    );
};

export default ScheduleBooking;