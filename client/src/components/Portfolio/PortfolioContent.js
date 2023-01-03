import { data_list } from "../../contants";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

const PortfolioContent = () => {
  const location = useLocation();
  console.log(useLocation);
  const path = location.pathname.split("/");
  const [posts, setPosts] = useState([{}]);
  const [portfolioDetails, getPortfolioDetails] = useState([]);
  const URL = "http://127.0.0.1:8000/api/get-portfolio";
  const getAllPortfolios = async () => {
    const res = await axios.get(URL).then(({ data }) => {
      getPortfolioDetails(data.data);
    });
  };
  useEffect(() => {
    getAllPortfolios();
  }, []);
  //   useEffect(() => {
  //     const getPost = async (id) => {
  //       console.log(path[3]);
  //       const res = await axios.get(`http://127.0.0.1:8000/api/get-image/${id}`);
  //       setPosts(res.data);
  //       console.log(res.data);
  //     };
  //     getPost();
  //   }, []);
  return (
    <div className="main_page">
      {portfolioDetails.map((item, index = 0) => (
        <div className="post_box overflow-hidden text-white" key={item.key}>
          <Link to={`/portfolio/albumDetails/${item.id}`}>
            <img src={item.thumbnails} alt={item.thumbnails} />
          </Link>
          <div className="appear__text absolute bottom-1 hidden w-4/5 bg-black/50 px-2 py-1 text-xs">
            {item.name_album} - {moment(item.created_at).format("DD/MM/YYYY")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioContent;
