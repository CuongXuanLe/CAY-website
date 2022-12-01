import React from "react";
import { Slider, Blog } from "../../components";

const Home = () => {
  return (
    <div>
      {/* StartSection1 */}
      <div className="h-screen">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1574025876844-6c9ba8602866')] bg-cover"></div>
        <div className="absolute bottom-7 left-7">
          <h1 className="text-3xl font-thin">
            <span className="font-semibold">CREATE</span> FORM IN OUR{" "}
            <span className="font-semibold">DESIGN</span>
            <br />
            <h2 className="text-[18px] font-normal tracking-wider">
              CAY STUDIO
            </h2>
          </h1>
          <p className="w-[55%]">
            Our agents are engaged and experienced in the Miami real estate
            market and well informed about the communities they services.
          </p>
        </div>
      </div>
      {/* EndSection1 */}

      {/* StartSection2 */}
      <div className="relative h-[calc(100vh-6rem)] w-full">
        <div className="absolute top-0 left-0 -z-20 h-full w-full bg-[url('https://images.unsplash.com/photo-1608324777753-5d2f6e547b1b')] bg-cover"></div>
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
            A news article discusses current or recent news of either general
            interest or of a specific toppic
          </h2>
        </div>
      </div>
      {/* EndSection2 */}
    </div>
  );
};

export default Home;
