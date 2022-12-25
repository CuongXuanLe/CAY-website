import React from "react";
import { BookingSuccess, SmallCalendar } from "../../components";

const ScheduleBooking = () => {
    return(
        <React.Fragment>
            <div className="h-auto w-full px-14 pt-28 flex justify-center items-center flex-col">
                {/* Enter Info */}
                <div className="bg-[#CD9F9F] w-[80%] h-auto p-10 pt-5 rounded-2xl flex ">
                    <div className="w-[50%] leading-8">
                        <h3 className="mb-3 font-bold">Thông tin khách hàng</h3>
                        <div>
                            <p className="mb-2">Họ và tên</p>
                            <input className="w-[70%] outline-none px-2"></input>
                        </div>
                        <div>
                            <p className="mb-2">Ngày sinh</p>
                            <input className="w-[70%] outline-none px-2 "></input>
                        </div>
                        <div>
                            <p className="mb-2">Số điện thoại</p>
                            <input className="w-[70%] outline-none px-2"></input>
                        </div>
                        <div>
                            <p className="mb-2">Email</p>
                            <input className="w-[70%] outline-none px-2"></input>
                        </div>
                        <div>
                            <p className="mb-2">Ghi chú</p>
                            <textarea className="w-[70%] outline-none px-2"></textarea>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        {/* Small Calendar */}
                        <h3 className="mb-2 font-bold">Ngày tháng</h3>
                        <SmallCalendar />

                        <div>
                            <h3 className="font-bold mt-3">Thời gian </h3>
                            <div className="flex justify-between w-[30%]">
                                <input className="text w-16"></input>
                                <p>-</p>
                                <input className="text w-16"></input>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

                <div className="my-5">
                    <button className="text-[#CD9F9F] text-2xl rounded-2xl border-2 border-[#CD9F9F] w-[20vh] h-auto py-2 hover:bg-[#CD9F9F] hover:text-white  duration-150 ease-in">Cancel</button>
                    <button className="text-[#CD9F9F] text-2xl rounded-2xl border-2 border-[#CD9F9F] w-[20vh] h-auto py-2 hover:bg-[#CD9F9F] hover:text-white  duration-150 ease-in ml-10">Book</button>
                </div>

                <div className="w-full flex items-center justify-center">
                    <BookingSuccess />
                </div>
            </div>
        </React.Fragment>
    );
};

export default ScheduleBooking;