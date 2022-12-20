import { AiOutlinePlus } from "react-icons/ai";
import { AlertDel } from "../../components";
import React, { useState,} from "react";
import  { Link }  from "react-router-dom";

const PortfolioContent = () => {

    const [delItem, setDelItem] = useState(false);

    const handleDelItem = () => {
        setDelItem(!delItem);
    };

    return (
        <div className="text-xl">
            <div className="flex justify-between items-center">
                <p>Album: </p>
                <Link to="/adminPortfolio/createAlbum">
                    <button className="flex px-3 py-2 rounded border-2 border-black items-center"><AiOutlinePlus className="mr-2"/> Create new album</button>
                </Link>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                <div className="border border-black rounded h-44 flex">
                    <img className="w-2/5 object-cover" src="https://images.unsplash.com/photo-1561652970-725490281931" alt="pic_1"/>
                    <div className="relative p-3 w-3/5">
                        <strong className="text-lg">Name Album</strong>
                        <p>Date created: 20/11/2022</p>
                        <p>Category: Flower</p>
                        <div className="absolute bottom-2 right-2 text-md">
                            <Link to="/adminPortfolio/updateAlbum">
                                <button className="py-1 px-5 border border-black hover:bg-black hover:text-white rounded">Update</button>
                            </Link>
                            <button onClick={() => setDelItem(true)} className="py-1 px-5 ml-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded">Delete</button>
                            <AlertDel onClose={handleDelItem} visible={delItem} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioContent