import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
const ScheduleDetails = () => {

  //getAPI
  const {id} = useParams();
  const navigate = useNavigate();
  const [infoUsers,setInfoUsers] = useState([]);
  const newStart = moment(infoUsers.formatted_start, 'DD-MM-YYYY HH:mm');
  const timeStart = newStart.format('HH:mm');
  const newEnd = moment(infoUsers.formatted_end, 'DD-MM-YYYY HH:mm');
  const timeEnd = newEnd.format('HH:mm');
  const infoAPI = `http://127.0.0.1:8000/api/schedule/${id}`;
  useEffect(() => {
    async function getInfo () {
      const res = await axios.get(infoAPI);
      setInfoUsers(res.data)
    }
    getInfo();
  },[])

  const deleteBooking = async () => {
    const res = await axios.delete(infoAPI)
    .then(({res})=> {
      console.log('success')
      alert('delete success')
      navigate('/schedule')
    })
    .catch((error) => {
        console.log(error)
    })
  }
  return (
    <React.Fragment>
      <div className="relative h-full w-full">
        <h3>Appointment Details</h3>
        <div className="px-10 py-5 ">
          <p className="mt-2">
            <span className="font-bold">Customer: </span>
            {infoUsers.title}
          </p>
          <p className="mt-2">
            <span className="font-bold text-red-600">Appointment Date: </span>{" "}
            {infoUsers.formatted_created_at}{" "}
            <span className="ml-4 font-bold text-red-600">Time: </span>
            {timeStart} 
            <span className="text-red-600 font-bold"> to </span> 
            {timeEnd}
          </p>
          <p className="mt-2">
            <span className="font-bold">Date of Birth: </span>{infoUsers.formatted_birthday}
          </p>
          <p className="mt-2">
            <span className="font-bold">Phone: </span>{infoUsers.phone}
          </p>
          <p className="mt-2">
            <span className="font-bold">Email: </span>
            {infoUsers.mail}
          </p>
          <p className="mt-2">
            <span className="font-bold">Note: </span>
            <br />
            {infoUsers.note}
          </p>
        </div>
        <div className="absolute right-1 bottom-5">
          <Link to={`/appointmentedit/${id}`}>
            <button className="w-20 border rounded border-black  duration-150 ease-in hover:bg-black hover:text-white">
              Update
            </button>
          </Link>
          <button onClick={() => deleteBooking(id)} className="ml-4 w-20 border rounded border-red-600 text-red-600 duration-150 ease-in hover:bg-red-600 hover:text-white">
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScheduleDetails;
