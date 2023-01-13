import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";

const PortfolioContent = () => {
    const [getAlbums, setGetAlbums] = useState([]);
    const url = "http://127.0.0.1:8000/api/get-portfolio";
    useEffect(() => {
        document.title = "Portfolio";
        getPortfolios();
    }, []);

    const getPortfolios = async () => {
        await axios.get(url).then(({ data }) => {
        setGetAlbums(data.data);
        });
    };
    console.log(getAlbums)
    return (
        <div className="main_page">
            {getAlbums.map((getAlbum) => (
                <div className="post_box text-white overflow-hidden" key={getAlbum.id}>
                    <Link to={`/portfolio/albumDetails/${getAlbum.id}`}>
                        <img src={getAlbum.thumbnails} alt={getAlbum.name_album}/>
                    </Link>
                    <div className="absolute bottom-1 w-4/5 px-2 py-1 text-xs bg-black/50 hidden appear__text">
                        {getAlbum.name_album} / {new Date(getAlbum.created_at).getDate().toString().padStart(2, "0")}-{(new Date(getAlbum.created_at).getMonth() + 1).toString().padStart(2, "0")}-{new Date(getAlbum.created_at).getFullYear()}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PortfolioContent