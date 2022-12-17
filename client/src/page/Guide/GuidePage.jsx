import React, { useEffect, useState } from "react";
import {
  GuideNav,
  GuideRental,
  GuideOption,
  GuideFacility,
} from "../../components";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const GuidePage = () => {
  const [guideData, setGuideData] = useState([]);
  const url = "http://127.0.0.1:8000/api/get-guide";

  useEffect(() => {
    document.title = "Guide";
    getGuideDetails();
  }, []);
  const getGuideDetails = async () => {
    const res = await axios.get(url).then(({ data }) => {
      setGuideData(data.data);
      // console.log(data)
    });
  };
  return (
    <>
      <div className="relative mx-auto mb-20 w-4/5 pt-32">
        <GuideNav />
        {guideData.length > 0 &&
          guideData.map((guideDB, key) => (
            <div key={key}>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <GuideRental
                      cost={guideDB.rent_cost}
                      deposit={guideDB.deposit_cost}
                      depositInfo={guideDB.deposit_information}
                      qrImg={guideDB.qr_image}
                      link={guideDB.link_fb}
                    />
                  }
                />
                <Route path="/option" element={<GuideOption />} />
                <Route
                  path="/facility"
                  element={<GuideFacility stuImg={guideDB.img_studio} />}
                />
              </Routes>
            </div>
          ))}
      </div>
    </>
  );
};

export default GuidePage;
