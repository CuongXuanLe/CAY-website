import { data_list } from "../../contants";
import { Link } from "react-router-dom"

const PortfolioContent = () => {
    return (
        <div className="main_page">
            {data_list.map((item,index=0) => (
                <div className="post_box text-white overflow-hidden" key={item.key}>
                    <Link to="/portfolio/albumDetails">
                        <img src={item.img} alt={item.tagline}/>
                    </Link>
                    <div className="absolute bottom-1 w-4/5 px-2 py-1 text-xs bg-black/50 hidden appear__text">{item.tagline} / {item.date}</div>
                </div>
            ))}
        </div>
    )
}

export default PortfolioContent