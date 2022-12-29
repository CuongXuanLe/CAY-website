import { data_list } from "../../contants";
// import { Link } from "react-router-dom"
import React from "react";
// import axios from "axios";

const PortfolioDetails = () => {
    // const [getAlbums, setGetAlbums] = useState([]);
    // // const url = `http://127.0.0.1:8000/api/edit/${id}`;
    // useEffect(() => {
    //     document.title = "Portfolio";
    //     getPortfolios();
    // }, []);

    // const getPortfolios = async (id) => {
    //     await axios.get(`http://127.0.0.1:8000/api/edit/${id}`).then(({ data }) => {
    //     setGetAlbums(data.data);
    //     });
    // };
    return (
        <div>
            <div className="text-center">
                <strong className="bg-[#a7705c] text-white px-8 py-2 inline-block ">
                    Profile/15.10.2022
                </strong>
            </div>
            <div className="Album__Details">
                {data_list.map((getAlbum) => (
                    <div className="Album__Details-photo" id={getAlbum.id}>                    
                        <img src={getAlbum.img} alt={getAlbum.tagline}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioDetails