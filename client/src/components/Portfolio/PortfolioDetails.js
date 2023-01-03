import { data_list } from "../../contants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

const PortfolioDetails = () => {
  const location = useLocation();
  console.log(useLocation);
  const path = location.pathname.split("/");
  const [portfolioDetails, getPortfolioDetails] = useState([]);
  useEffect(() => {
    const getPost = async (id) => {
      console.log(path[3]);
      const res = await axios.get(
        "http://127.0.0.1:8000/api/get-image/" + path[3]
      );
      getPortfolioDetails(res.data.data);
      console.log(res.data);
    };
    getPost();
  }, []);

  return (
    <div>
      <div className="text-center">
        <strong className="inline-block bg-[#a7705c] px-8 py-2 text-white ">
          Profile - {moment(portfolioDetails.created_at).format("DD/MM/YYYY")}
        </strong>
      </div>
      <div className="Album__Details">
        <div className="Album__Details-photo">
          {portfolioDetails.map((item) => (
            <img src={item.image} alt={item.tagline} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
