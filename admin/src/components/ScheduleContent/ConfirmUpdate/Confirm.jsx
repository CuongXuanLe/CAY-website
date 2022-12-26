import React from "react";
import axios from "axios";

const Confirm = ({ title, date, start, end, email, birthDay, phone, note, index}) => {

  const deleteForm = async(id) => {
    const res = await axios.delete(`http://127.0.0.1:8000/api/schedule/${id}`)
    .then(({res}) => {
      alert('delete success')
    })
    .catch((err) => {
      console.log(err)
    })
    window.location.reload(false);
  }

  const updateForm = async(id) => {
    const formData = {
      title: title,
      phone: phone,
      birthday: birthDay,
      email: email,
      note: note,
      created_at: date,
      start: start,
      end: end,
      approval: 1,
    };
    const res = await axios.patch(`http://127.0.0.1:8000/api/schedule/${id}`, formData)
    .then(({res}) => {
      alert('Confirm success')
    })
    .catch((error) => {
      console.log(error)
    })
    window.location.reload(false);
  }

  return (
    <>
      <div className="h-auto w-full border rounded border-black px-3 py-2 mb-3">
        <div className="flex justify-between">
          <div className="w-1/3">
            <span className="font-bold">Customer: </span>{title}
          </div>
          <div className="w-1/3">
            <span className="font-bold text-red-600">Appointment Date: </span>
            {date}
          </div>
          <div className="w-1/3">
            <span className="font-bold text-red-600">Time:</span> {start} to {end}
          </div>
        </div>
        <div>
          <span className="font-bold">Note:</span>
          <p>
            {note}
          </p>
        </div>
        <div className="mt-2 flex justify-end">
          <button onClick={() => deleteForm(index)} className="w-20  border rounded border-red-600 text-red-600 duration-150 ease-in hover:bg-red-600 hover:text-white">
            Delete
          </button>
          <button onClick={() => updateForm(index)} className="ml-2 w-20 border rounded border-green-600 hover:bg-white hover:text-green-600 duration-150 ease-in bg-green-600 text-white">
            ✓Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirm;
