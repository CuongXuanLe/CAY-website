import React,{ useEffect, useState } from "react"
import axios from "axios"

const GuideOption = () => {
    const [getItems, setGetItems] = useState([])
    const url = "http://127.0.0.1:8000/api/get-items"
    useEffect(() => {
        document.title = "Option";
        getListTools()
    },[]);

    const getListTools = async () => {
        const res = await axios.get(url)
        .then(({data}) => {
            setGetItems(data.data);
            // console.log(data)
        })
    }
    return (
        <>
            <p className="text-center text-2xl mb-16"><strong>List tools & devices</strong></p>
            <p className="font-bold mb-3">[Miễn phí - đã bao gồm khi thuê studio]</p>
            <ul className="list-decimal pl-10">
                {getItems.length > 0 && getItems.map((getItem) => (
                    <li key={getItem.id}>{getItem.item}</li>
                ))}
            </ul>
            <hr className="my-8"/>
            <p className="font-bold mb-4">[Lưu ý]</p>
            <ul className="list-disc px-5">
                <li>Nếu bạn muốn đến xem trước không gian studio, vui lòng kiểm tra lịch trống và liên hệ CAY</li>
                <li>Khi xảy ra hư hỏng trong quá trình chụp, bạn vui lòng bồi thường 70% giá trị cho cơ sở vật chất, đạo cụ và máy móc bị thiệt hại đó.</li>
                <li>Camera quan sát được lắp đặt trong studio để đảm bảo an toàn.</li>   
            </ul>
        </>
    )
}

export default GuideOption