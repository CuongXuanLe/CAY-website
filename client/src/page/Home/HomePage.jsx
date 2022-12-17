import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slider, Blog } from "../../components";

const Home = () => {
  //getAPI
  const [contents, setContents] = useState([]);
  const apiHome = "http://127.0.0.1:8000/api/get-home";
  useEffect(() => {
    async function getDataHome() {
      const res = await axios.get(apiHome);
      setContents(res.data.data);
      // console.log(res.data.data);
    }
    getDataHome();
  }, []);

  return (
    <>
      <div className="snap-y snap-mandatory">
        <div className="relative h-screen w-full snap-end">
          {contents &&
            contents.map((content) => (
              <img
                key={content.id}
                src={content.background1}
                alt="background1"
                className="z-0 h-full w-full object-cover"
              ></img>
            ))}
          <div className="absolute bottom-7 left-7 ">
            <h1 className="text-3xl">
              {contents &&
                contents.map((content) => (
                  <span key={content.id} className="font-semibold ">
                    {content.title1}
                  </span>
                ))}
              <div className="mb-7" />
              {contents &&
                contents.map((content) => (
                  <h2
                    key={content.id}
                    className="text-[18px] font-light tracking-wider"
                  >
                    {content.subtitle1}
                  </h2>
                ))}
            </h1>
            <div className="mb-7" />
            {contents &&
              contents.map((content) => (
                <p key={content.id} className="w-[55%] text-lg font-normal">
                  {content.description1}
                </p>
              ))}
          </div>
        </div>
        {/* EndSection1 */}

        {/* StartSection2 */}
        <div className="relative h-[calc(100vh-6rem)] w-full snap-end">
          {contents &&
            contents.map((content) => (
              <img
                key={content.id}
                src={content.background2}
                alt="background2"
                className="absolute top-0 left-0 -z-20 h-full w-full object-cover"
              ></img>
            ))}
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
            {contents &&
              contents.map((content) => (
                <h2
                  key={content.id}
                  className="mt-12 w-[50rem] text-center font-playfair text-2xl"
                >
                  {content.description2}
                </h2>
              ))}
          </div>
        </div>
        {/* EndSection2 */}

        {/* StartSection3 */}
        <div className="h-[calc(100vh-14rem)] w-full snap-end bg-white">
          <div className="grid h-3/4 grid-cols-2">
            <div className="w-full">
              {contents &&
                contents.map((content) => (
                  <img
                    key={content.id}
                    className="h-120 w-full object-cover"
                    src={content.imgAbout}
                    alt=""
                  ></img>
                ))}
            </div>
            <div className="flex h-96 w-full flex-col items-center justify-center text-center">
              <h2 className=" mb-5 text-xl font-semibold tracking-[0.2em]">
                ABOUT US
              </h2>
              {contents &&
                contents.map((content) => (
                  <p key={content.id} className="px-10 font-lato">
                    {content.descriptionAbout}
                  </p>
                ))}
            </div>
          </div>
        </div>
        {/* EndSection3 */}
      </div>
    </>
  );
};

export default Home;
