import React from "react";
import { Link } from "react-router-dom";
const BookingSuccess = () => {
    return(
        <React.Fragment>
            <div className="w-[50%] mx-auto bg-[#CD9F9F] rounded-2xl text-center leading-10">
                <h3 className="font-bold">Đặt lịch thành công!</h3>
                <h3 className="font-bold">Hãy đặt cọc để hoàn thành để xác nhận lịch của bạn.</h3>
                <p>Thông tin chuyển khoản để đặt cọc:</p>
                <p>07 772 552 752 TP Bank - Nguyễn Minh Đức</p>
                <Link to='/schedule'>
                    <button className="my-2 w-1/5 text-white hover:bg-white hover:text-[#CD9F9F] rounded border ">Back</button>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default BookingSuccess;