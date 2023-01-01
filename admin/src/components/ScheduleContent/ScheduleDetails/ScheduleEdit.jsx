import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
const ScheduleEdit = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [note, setNote] = useState();
  const [birthday, setBirthday] = useState();
  const navigate = useNavigate()

  const updateDetails = async (e) => {
    e.preventDefault();
    //call api
    const url = "http://127.0.0.1:8000/api/schedule/1";
    const formData = {
      title: title,
      phone: phone,
      birthday: birthday,
      email: email,
      note: note,
      created_at: date,
      start: startTime,
      end: endTime,
    };
    // console.log(formData);
    await axios
      .patch(url, formData)
      .then((res) => {
        // console.log(res.data);
        alert("success");
        navigate("/schedule")
      })
      .catch((err) => {
        console.log(err);
        alert("service error");
      });
    window.location.reload(false);
  };
  const deleteAppointment = async(id) => {
    const res = await axios.delete(`http://127.0.0.1:8000/api/schedule/${id}`)
    .then(({result})=> {
        // console.log('success')
        alert('delete success')
    })
    .catch((error) => {
        console.log(error)
    })
    // window.location.reload(false);
}

  //getAPI
  const {id} = useParams();
  const [infoUsers,setInfoUsers] = useState([]);
  const infoAPI = `http://127.0.0.1:8000/api/schedule/${id}`;
  useEffect(() => {
    async function getInfo () {
      const res = await axios.get(infoAPI);
      setInfoUsers(res.data)
      console.log(res.data);
    }
    getInfo();
  },[])

  return (
    <>
      <div className="relative h-full w-full">
        <h3>Update Details</h3>
        <div className="px-10 py-5 ">
          <div className="mt-2 flex items-center">
            <span className="font-bold">Customer<span className="text-red-600">*</span>:</span>
            <input 
              value={title || ''}
              onChange={(event) => {setTitle(event.target.value)}}
              placeholder={infoUsers.title}
              className="ml-3 py-1 px-2 grow border rounded border-black"></input>
          </div>
          <div className="mt-2 flex justify-between">
            <div className="flex items-center w-3/5">
              <span className="font-bold text-red-600 ">Appointment Date*:</span>
              <input
                value={date || ''}
                onChange={(event) => {setDate(event.target.value)}}
                placeholder={infoUsers.formatted_created_at}
                className="grow ml-3 py-1 px-2 rounded mr-4 border border-black"></input>
            </div>
            <div className="flex w-2/5 items-center">
              <span className="font-bold text-red-600 ">Time*:</span>
              <input
                value={startTime || ''}
                onChange={(event) => {setStartTime(event.target.value)}}
                placeholder={infoUsers.formatted_start} 
                className="ml-3 py-1 px-2 rounded w-full border border-black"></input>
              <span className="font-bold text-red-600 ml-2">to</span>
              <input
                value={endTime || ''}
                onChange={(event) => {setEndTime(event.target.value)}}
                placeholder={infoUsers.formatted_end}
                className="ml-3 py-1 px-2 rounded w-full border-[1px] border-black"></input>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <p className="font-bold">Date of birth (optional):</p>
            <input
              value={birthday || ''}
              onChange={(event) => {setBirthday(event.target.value)}}
              placeholder={infoUsers.formatted_birthday}
              className="grow px-2 py-1 ml-3 border rounded border-black"></input>
          </div>
          <div className="mt-2 flex items-center">
            <span className="font-bold">Phone:<span className="text-red-600">*</span></span>
            <input
              type='number'
              value={phone || ''}
              maxLength={15}
              onChange={(event) => {setPhone(event.target.value)}}
              placeholder={infoUsers.phone}
              className="grow ml-3 py-1 px-2 rounded border border-black"></input>
          </div>
          <div className="mt-2 flex items-center">
            <span className="font-bold">Email (optional):</span>
            <input
              type='email'
              value={email || ''}
              onChange={(event) => {setEmail(event.target.value)}}
              placeholder={infoUsers.email}
              className="ml-3 py-1 px-2 rounded grow border border-black"></input>
          </div>
          <div className="mt-2 flex  flex-col">
            <span className="font-bold">Note:</span>
            <textarea
              value={note || ''}
              maxLength={225}
              onChange={(event) => {setNote(event.target.value)}}
              placeholder={infoUsers.note}
              className="w-full border rounded border-black"></textarea>
          </div>
        </div>
        <div className="absolute right-1 bottom-5">
          <button onClick={updateDetails} className="w-20 border-[1px] border-black  duration-150 ease-in hover:bg-black hover:text-white">
            Update
          </button>
          <button onClick={deleteAppointment} className="w-ml-4 w-20 border ml-4 border-red-600 text-red-600 duration-150 ease-in hover:bg-red-600 hover:text-white">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ScheduleEdit;
