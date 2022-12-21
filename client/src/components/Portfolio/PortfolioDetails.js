import { data_list } from "../../contants";

const PortfolioDetails = () => {
    return (
        <div>
            <div className="text-center">
                <strong className="bg-[#a7705c] text-white px-8 py-2 inline-block ">
                    Profile/15.10.2022
                </strong>
            </div>
            <div className="Album__Details">
            {data_list.map((item,index=0) => (
                <div className="Album__Details-photo" key={item.key}>                    
                    <img src={item.img} alt={item.tagline}/>
                </div>
            ))}
        </div>
        </div>
    )
}

export default PortfolioDetails