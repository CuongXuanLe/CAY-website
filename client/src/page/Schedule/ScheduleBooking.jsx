import React, {useState, useEffect} from "react";
import { BookingSuccess } from "../../components";
import { Link } from "react-router-dom";
import moment from 'moment'
import axios from "axios";
//Datepicker
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
//Timepicker ant
// import { TimePicker } from 'antd';

const ScheduleBooking = () => {
    const [title, getTitle] = useState();
    const [birthday, getBirthday] = useState(new Date());
    const [phone, getPhone] = useState();
    const [email, getEmail] = useState();
    const [note, getNote] = useState();
    const [date, getDate] = useState(new Date());
    const [startTime, getTimeStart] = useState();
    const [endTime, getTimeEnd] = useState();
    const [success, setSuccess] = useState();
    const newDate = moment(date).format('DD-MM-YYYY');
    const newBirthday = moment(birthday).format('DD-MM-YYYY');

    const CreateBooking = async (e) => {
        e.preventDefault();
        setSuccess(false);
        const url = "http://127.0.0.1:8000/api/schedule";
        const formData = {
            title: title,
            phone: phone,
            birthday: newBirthday,
            email: email,
            note: note,
            created_at: newDate,
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
                alert('Fill full information, please')
            })
    }
    useEffect(() => {
        document.title = "Booking";
    })

    return(
        <React.Fragment>
            <div className="h-auto w-full px-14 pt-28 flex justify-center items-center flex-col">
                {/* Enter Info */}
                <form className="bg-[#CD9F9F] w-[80%] h-auto p-10 pt-5 rounded-2xl flex " onSubmit={CreateBooking}>
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
                            <Flatpickr
                                value={birthday}
                                onChange={(selectedDates) => { getBirthday(selectedDates[0]) }}
                                className="w-[70%] outline-none rounded px-2"
                            />
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
                        <h3 className="mb-2 font-bold">Date<span className="text-red-600">*</span></h3>
                        <Flatpickr
                            value={date}
                            onChange={(selectedDates) => {getDate(selectedDates[0])}}
                            // onClick={console.log(date)}
                        />
                    <div>
                            <h3 className="font-bold mt-3">Time <span className="text-red-600">*</span> </h3>
                            <div className="flex justify-between w-[30%]">
                                <input
                                placeholder="8:30"
                                value={startTime || ''}
                                onChange={(event) => {getTimeStart(event.target.value)}}
                                className="w-16 px-2 rounded"></input>
                                
                                <p className="mx-1">to</p>
                                <input
                                placeholder="9:30"
                                value={endTime || ''}
                                onChange={(event) => {getTimeEnd(event.target.value)}}
                                className="text w-16 px-2 rounded"></input>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="my-5">
                    <Link to="/schedule" >
                        <button className="text-[#CD9F9F] text-2xl rounded-2xl border-2 border-[#CD9F9F] w-[20vh] h-auto py-2 hover:bg-[#CD9F9F] hover:text-white  duration-150 ease-in">Cancel</button>
                    </Link>
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