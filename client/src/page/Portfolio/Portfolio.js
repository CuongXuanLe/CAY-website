import { data_list } from "../../contants";
import { Routes, Route } from "react-router-dom";
import { PortfolioContent } from "../../components";

const Portfolio = () => {
    return (
        <div className="relative mx-auto mb-20 w-4/5 pt-32">
            <Routes>
                <Route exact path="/" element={<PortfolioContent/>} />
                <Route exact path="/albumDetails" element={""} />
            </Routes>
        </div>
    )
}

export default Portfolio