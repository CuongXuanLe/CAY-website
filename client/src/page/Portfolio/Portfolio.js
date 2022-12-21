// import { Link } from "react-router-dom"
import { data_list } from "../../contants";

const Portfolio = () => {
    return (
        <div className="relative mx-auto mb-20 w-4/5 pt-32">
            <div className="main_page">
                {
                    data_list.map((item,index=0) => (
                        <div className="post_box" key={item.key}>
                            <img src={item.img} alt="" />
                            {/* <h2>{item.tagline}</h2> */}
                        </div>
                    ))
                }
      </div>
        </div>
    )
}

export default Portfolio