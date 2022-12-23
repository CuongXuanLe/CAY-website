import React from "react";

const Confirm = () => {
  return (
    <>
      <div className="h-auto w-full border-[1px] border-black px-3 py-2">
        <div className="flex justify-between">
          <p>
            <span className="font-bold">Customer: </span>Hailey
          </p>
          <p>
            <span className="font-bold text-red-600">Appointment Date:</span>
            10/12/2022
          </p>
          <p>
            <span className="font-bold text-red-600">Time:</span> 9h30 to 11h30
          </p>
        </div>
        <div>
          <span className="font-bold">Note:</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's .....
          </p>
        </div>
        <div className="mt-2 flex justify-end">
          <button className="w-20  border-[1px] border-red-600 text-red-600 duration-150 ease-in hover:bg-red-600 hover:text-white">
            Delete
          </button>
          <button className="ml-2 w-20 border-[1px] border-green-600 text-green-600 duration-150 ease-in hover:bg-green-600 hover:text-white">
            ✓Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirm;
