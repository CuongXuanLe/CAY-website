import React, { useEffect } from "react";

const GuideFacility = ({ stuImg }) => {
  useEffect(() => {
    document.title = "Facility";
  });

  return (
    <>
      <p className="mb-16 text-center text-2xl">
        <strong>Studio space map</strong>
      </p>
      <div>
        <img className="mx-auto" src={stuImg} alt="space studio" />
      </div>
      <hr className="my-8" />
      <p className="mb-4 font-bold">[Hướng dẫn]</p>
      <ul className="list-disc px-5">
        <li>
          Nhà vệ sinh riêng nằm trong không gian của studio, cây lau nhà được
          đặt bên trong nhà vệ sinh.
        </li>
        <li>
          Thùng rác và chổi quét được để bên ngoài studio, cùng không gian với
          khu vực để xe.
        </li>
        <li>
          CAY có khu vực phân loại rác giấy và rác nhựa, nếu bạn vui lòng thì
          hãy phân loại rác hoặc CAY sẽ giúp bạn sau buổi chụp.
        </li>
        <li>
          Studio và nhà để xe là khu vực không hút thuốc, bạn hút thuốc vui lòng
          hút ở khu vực ban công hoặc bên ngoài.
        </li>
        <li>
          Khi sử dụng studio, bạn vui lòng di chuyển đạo cụ, nội thất trong
          studio cẩn thận và nhẹ nhàng.
        </li>
        <li>Camera quan sát được lắp đặt trong studio để đảm bảo an toàn.</li>
      </ul>
    </>
  );
};

export default GuideFacility;
