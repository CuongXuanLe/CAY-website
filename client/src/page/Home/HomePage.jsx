import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slider, Blog, Footer, Sidebar } from "../../components";


const Home = () => {
  const [contents,setContents] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/get-home`).then(res => {
      setContents(res.data.data)
    })
  },[]);

  return (
    <>
    {contents.map((content) => (
    <div className="snap-y snap-mandatory"> 
      <div className="relative h-screen w-full snap-end">
        <img src={content.background1} alt="background1" className="h-full w-full z-0 object-cover"></img>
        <div className="absolute bottom-7 left-7">
          <h1 className="text-3xl font-thin">
            <span className="font-semibold">{content.title1}</span>
            <br />
            <h2 className="text-[18px] font-normal tracking-wider">
              {content.subtitle1}
            </h2>
          </h1>
          <p className="w-[55%]">
            {content.description1}
          </p>
        </div>
      </div>
      {/* EndSection1 */}

      {/* StartSection2 */}
      <div className="relative h-[calc(100vh-6rem)] w-full snap-end">
        <img src={content.background2} alt="background2" className="absolute top-0 left-0 -z-20 h-full w-full object-cover"></img>
        <div className="absolute top-0 left-0 -z-10 h-full w-full backdrop-blur-[5px]"></div>
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex h-72 w-232">
            <div className="w-[47%]">
              <h2 className="mb-2 text-center text-xl font-normal tracking-widest">
                PORTFOLIO
              </h2>
              <div className="h-full w-full">
                <Slider />
              </div>
            </div>
            <div className="w-[53%]">
              <h2 className="mb-2 text-center text-xl font-normal tracking-widest">
                BLOG
              </h2>
              <div className="h-full w-full">
                <Blog />
              </div>
            </div>
          </div>
          <h2 className="mt-12 w-[50rem] text-center font-playfair text-2xl">
            {content.description2}
          </h2>
        </div>
      </div>
      {/* EndSection2 */}

      {/* StartSection3 */}
      <div className="h-[calc(100vh-6rem)] w-full snap-end bg-white">
        <div className="grid h-3/4 grid-cols-2">
          <div className="w-full">
            <img
              className="h-96 w-full object-cover"
              src={content.imgAbout}
              alt=""
            ></img>
          </div>
          <div className="flex h-96 w-full flex-col items-center justify-center text-center">
            <h2 className=" mb-5 text-xl font-semibold tracking-[0.2em]">
              ABOUT US
            </h2>
            <p className="px-10 font-lato">
              {content.descriptionAbout}
            </p>
          </div>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
      {/* EndSection3 */}
      <Sidebar />
    </div>
    ))}
    </>
  );
};

export default Home;
