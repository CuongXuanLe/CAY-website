import {AdminNav, PortfolioContent, CreateAlbum} from '../../components';
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

const Portfolio = () => {

    useEffect(() => {
        document.title = "Portfolio";
    })

    return(
        <div className="flex flex-row">
            <AdminNav />
            <div className="container p-10 ml-96">
                <strong className="text-3xl">Portfolio</strong>
                <div className="px-5 pt-10 space-y-10">
                    <Routes>
                        <Route exact path="/" element={<PortfolioContent />} />
                        <Route path="/createAlbum" element={<CreateAlbum />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Portfolio