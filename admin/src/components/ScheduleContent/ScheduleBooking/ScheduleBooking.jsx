import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ScheduleBooking = () => {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [note, setNote] = useState();
  const [birthday, setBirthday] = useState();

  const navigate = useNavigate();

  const CreateBooking = async (e) => {
    e.preventDefault();
    
    const url = "http://127.0.0.1:8000/api/schedule";
    const formData = {
      name: name,
      phone: phone,
      birthday: birthday,
      email: email,
      note: note,
      created_at: date,
      start: startTime,
      end: endTime,
    };
    // console.log(formData)
    await axios
      .post(url, formData)
      .then((res) => {
        console.log(res.data)
        alert("success");
        navigate("/schedule")
      })
      .catch((err) => {
        // console.log(err)
        alert("Fill full information, please!")
      });
  }

  return (
    <React.Fragment>
      <div className="relative h-full w-full">
        <h3>Appointment Details</h3>
        <div className="px-10 py-5 ">
          <div className="mt-2 flex items-center">
            <span className="font-bold">Customer<span className="text-red-600">*</span>:</span>
            <input 
              value={name || ''}
              onChange={(event) => {setName(event.target.value)}}
              placeholder={'e.g name customer'}
              className="ml-3 py-1 px-2 grow border rounded border-black"></input>
          </div>
          <div className="mt-2 flex justify-between">
            <div className="flex items-center w-3/5">
              <span className="font-bold text-red-600 ">Appointment Date*:</span>
              <input
                value={date || ''}
                onChange={(event) => {setDate(event.target.value)}}
                placeholder={'e.g 25-12-2022'} 
                className="grow ml-3 py-1 px-2 rounded mr-4 border border-black"></input>
            </div>
            <div className="flex w-2/5 items-center">
              <span className="font-bold text-red-600 ">Time*:</span>
              <input
                value={startTime || ''}
                onChange={(event) => {setStartTime(event.target.value)}}
                placeholder={'e.g 12:30'}  
                className="ml-3 py-1 px-2 rounded w-full border border-black"></input>
              <span className="font-bold text-red-600 ml-2">to</span>
              <input
                value={endTime || ''}
                onChange={(event) => {setEndTime(event.target.value)}}
                placeholder={'e.g 14:30'}  
                className="ml-3 py-1 px-2 rounded w-full border-[1px] border-black"></input>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <p className="font-bold">Date of birth (optional):</p>
            <input
              value={birthday || ''}
              onChange={(event) => {setBirthday(event.target.value)}}
              placeholder={'e.g 25-12-2002'}  
              className="grow px-2 py-1 ml-3 border rounded border-black"></input>
          </div>
          <div className="mt-2 flex items-center">
            <span className="font-bold">Phone:<span className="text-red-600">*</span></span>
            <input
              type='number'
              value={phone || ''}
              maxLength={15}
              onChange={(event) => {setPhone(event.target.value)}}
              placeholder={'e.g 0904050601'}
              className="grow ml-3 py-1 px-2 rounded border border-black"></input>
          </div>
          <div className="mt-2 flex items-center">
            <span className="font-bold">Email (optional):</span>
            <input
              type='email'
              value={email || ''}
              onChange={(event) => {setEmail(event.target.value)}}
              placeholder={'e.g caystudio@gmail.com'}
              className="ml-3 py-1 px-2 rounded grow border border-black"></input>
          </div>
          <div className="mt-2 flex  flex-col">
            <span className="font-bold">Note:</span>
            <textarea
              value={note || ''}
              maxLength={225}
              onChange={(event) => {setNote(event.target.value)}}
              placeholder={'e.g something'}
              className="w-full border rounded border-black"></textarea>
          </div>
        </div>
        <div className="absolute right-1 bottom-5">
          <Link to="/schedule">
            <button className="w-20 border border-black rounded duration-150 ease-in hover:bg-black hover:text-white">
              Cancel
            </button>
          </Link>
          <button type="submit" onClick={(event) => CreateBooking(event)} className="ml-4 w-20 border rounded border-green-500 text-green-500 duration-150 ease-in hover:bg-green-500 hover:text-white">
            Create
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScheduleBooking;
