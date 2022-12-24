import React from "react";

const BookingSuccess = () => {
    return(
        <React.Fragment>
            <div className="w-[50%] bg-[#CD9F9F] rounded-2xl h-auto text-center leading-10">
                <h3 className="font-bold">Đặt lịch thành công!</h3>
                <h3 className="font-bold">Hãy đặt cọc để hoàn thành để xác nhận lịch của bạn.</h3>
                <p>Thông tin chuyển khoản để đặt cọc:</p>
                <p>07 772 552 752 TP Bank - Nguyễn Minh Đức</p>
            </div>
        </React.Fragment>
    );
};

export default BookingSuccess;