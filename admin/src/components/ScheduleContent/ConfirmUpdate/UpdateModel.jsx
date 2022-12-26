import React from "react";

const UpdateModel = () => {
  
  return (
    <>
      <div className="h-auto w-[26rem] border-[1px] border-black px-2 py-3 ">
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Customer:</span> Hailey
          </p>
          <div>
            <p>
              <span className="text-red-600">Appointment Date:</span> 10/12/2022
            </p>
            <p>
              <span className="text-red-600">Time:</span> 9h30 to 11h30
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <p>
            <span className="font-semibold">Note:</span>
          </p>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's .....
          </p>
        </div>
        <div className="mt-2 flex justify-end">
          <button className="w-16 rounded-sm border-[1px] border-black px-1 duration-150 ease-in hover:bg-black hover:text-white">
            Update
          </button>
          <button className="ml-2 w-16 rounded-sm border-[1px] border-red-600 px-1 text-red-600 duration-150 ease-in hover:bg-red-600 hover:text-white">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateModel;
