import { Routes, Route } from "react-router-dom";
import { PortfolioContent, PortfolioDetails } from "../../components";

const Portfolio = () => {
    return (
        <div className="relative mx-auto mb-20 w-4/5 pt-32">
            <Routes>
                <Route exact path="/" element={<PortfolioContent/>} />
                <Route path="/albumDetails/:id" element={<PortfolioDetails/>} />
            </Routes>
        </div>
    )
}

export default Portfolio