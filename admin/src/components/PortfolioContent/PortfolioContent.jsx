import { AiOutlinePlus } from "react-icons/ai";
import { AlertDel } from "../../components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const PortfolioContent = () => {
  const [delItem, setDelItem] = useState(false);

  const handleDelItem = () => {
    setDelItem(!delItem);
  };

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

  return (
    <div className="text-xl">
      <div className="flex items-center justify-between">
        <p>Album: </p>
        <Link to="/adminPortfolio/createAlbum">
          <button className="flex items-center rounded border-2 border-black px-3 py-2">
            <AiOutlinePlus className="mr-2" /> Create new album
          </button>
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
        {portfolioDetails.length > 0 &&
          portfolioDetails.map((portfolioDetail) => (
            <div
              className="flex h-44 rounded border border-black"
              key={portfolioDetail.id}
            >
              <img
                className="w-2/5 object-cover"
                src={portfolioDetail.thumbnails}
                alt="pic_1"
              />
              <div className="relative w-3/5 p-3">
                <strong className="text-lg">
                  {portfolioDetail.name_album}
                </strong>
                <p>
                  Date created:{" "}
                  {moment(portfolioDetail.created_at).format("DD/MM/YYYY")}
                </p>
                <p>Category: {portfolioDetail.category}</p>
                <div className="text-md absolute bottom-2 right-2">
                  <Link
                    to={`/adminPortfolio/updateAlbum/${portfolioDetail.id}`}
                  >
                    <button className="rounded border border-black py-1 px-5 hover:bg-black hover:text-white">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => setDelItem(true)}
                    className="ml-2 rounded border border-red-600 py-1 px-5 text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Delete
                  </button>
                  <AlertDel onClose={handleDelItem} visible={delItem} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PortfolioContent;
