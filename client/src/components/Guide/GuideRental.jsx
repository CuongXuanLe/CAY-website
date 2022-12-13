import React from "react"

const GuideRental = () => {
    return(
        <>
            <p className="text-center text-2xl mb-16"><strong>Services Information at Cay Stu.</strong></p>
            <div>
                <p className="font-bold mb-3">[Giá thuê studio] --- 150.000/giờ</p>
                <ul className="list-disc px-5">
                    <li>Cho thuê và sử dụng tính theo giờ và <strong>chưa bao gồm thuế VAT</strong>.</li>
                    <li>Thuê từ 2 tiếng trở lên sẽ được <strong>miễn phí 30 phút</strong> chuẩn bị.</li>
                </ul>
                <hr className="my-8"/>
                <p className="font-bold mb-3">[Đặt lịch thuê]</p>
                <ul className="list-decimal px-4">
                    <li>Nhắn tin trước tiếp qua
                        <a className="text-yellow-500" href="https://www.facebook.com/CAYYYYYYYY.studio" alt="facebook"> fanpage </a> hoặc xem lịch trống và đặt lịch tại 
                        <a className="text-yellow-500" href="/"> website </a>, điền thông tin và gửi yêu cầu đặt lịch.
                    </li>
                    <li>Sau khi gửi yêu cầu, quý bạn vui lòng <strong>đặt cọc 100.000</strong>, 
                        sau khi được nhân viên xác nhận lịch sẽ được đặt trên cả 
                        <a className="text-yellow-500" href="https://www.facebook.com/CAYYYYYYYY.studio" alt="facebook"> fanpage </a>và
                        <a className="text-yellow-500" href="/"> website</a>, 
                        bạn đã hoàn thành đặt lịch thuê và có thể kiểm tra lịch đã đặt trong lịch studio
                    </li>
                    <li>Hoàn thành thanh toán phí thuê studio cuối buổi chụp.</li>
                    <li>Để được tư vấn trước khi đặt lịch một cách kĩ càng và nhanh chóng, hãy nhắn tin trực tiếp tại <a className="text-yellow-500" href="https://www.facebook.com/CAYYYYYYYY.studio" alt="facebook">fanpage CAY studio</a></li>
                </ul>
                <hr className="my-8"/>
                <p className="font-bold mb-3">[Thông tin đặt cọc]</p>
                <p>07 772 552 752 TP Bank - Nguyễn Minh Đức</p>
                <img className="w-56 h-56" src="https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png" alt="QR_Img"/>
                <hr className="my-8"/>
                <p className="font-bold mb-3">[Thời gian đặt lịch]</p>
                <ul className="list-disc px-5">
                    <li>Thời gian đặt lịch thuê <strong>trước tối thiểu là 3 giờ</strong></li>
                    <li>Thời gian đặc lịch đã bao gồm thời gian nhận và trả studio.</li>
                </ul>
                <hr className="my-8"/>
                <p className="font-bold mb-3">[Hủy Lịch]</p>
                <ul className="list-disc px-5">
                    <li>Trước ngày sử dụng 5 ngày hoàn tiền 100%</li>
                    <li>Trước ngày sử dụng từ 4 đến 3 ngày hoàn tiền 50%</li>
                    <li>Từ 2 ngày trước ngày sử dụng sẽ không hoàn tiền</li>
                    <li><strong>Thay đổi lịch</strong> sẽ được áp dụng như <strong>hủy lịch và đặt lịch thuê mới.</strong></li>
                </ul>
                <hr className="my-8"/>
                <p className="font-bold mb-3">[Phụ phí]</p>
                <ul className="list-decimal px-4">
                    <li>
                        <p>Mỗi booking, studio nhận tiêu chuẩn 5 người/ekip, trong trường hợp quá số người, phụ phí sẽ tính như sau:</p>
                        <ul className="list-disc px-5">
                            <li>
                                Ekip &#62; 5 người: phụ thu 100.000/booking
                            </li>
                            <li>
                                Ekip &#62; 10 người: phụ thu 200.000/booking
                            </li>
                        </ul>
                    </li>
                    <li>CAY sẽ hỗ trợ set up đèn và thiết bị 30 đầu của buổi chụp, trong trường hợp hỗ trợ xuyên suốt buổi chụp, phụ phí sẽ được tính 100.000/giờ</li>
                    <li>Sử dụng studio trước 7h và sau 22h, tính phụ phí 100.000/giờ.</li>
                </ul>
                <hr className="my-8"/>
                <p className="font-bold mb-3">[Đỗ xe]</p>
                <p>CAY có khu vực để xe máy, khách đi ô tô vui lòng liên hệ CAY để được chỉ dẫn nơi để xe gần nhất.</p>
            </div>
        </>
    )
}

export default GuideRental