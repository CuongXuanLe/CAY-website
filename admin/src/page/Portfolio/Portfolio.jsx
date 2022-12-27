import {
  AdminNav,
  PortfolioContent,
  CreateAlbum,
  UpdateAlbum,
} from "../../components";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio";
  });

  return (
    <div className="flex flex-row">
      <AdminNav />
      <div className="container ml-96 p-10">
        <strong className="text-3xl">Portfolio</strong>
        <div className="space-y-10 px-5 pt-10">
          <Routes>
            <Route exact path="/" element={<PortfolioContent />} />
            <Route path="/createAlbum" element={<CreateAlbum />} />
            <Route path="/updateAlbum" element={<UpdateAlbum />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
