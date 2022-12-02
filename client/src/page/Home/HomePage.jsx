import React from "react";
import { Slider, Blog, Footer, Sidebar } from "../../components";

const Home = () => {
  return (
    <div>
      {/* StartSection1 */}
      <div className="h-screen w-full">
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

      {/* StartSection3 */}
      <div className="h-[calc(100vh-6rem)] w-full bg-white">
        <div className="grid h-3/4 grid-cols-2">
          <div className="w-full">
            <img
              className="h-96 w-full object-cover"
              src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299293823_5165269870269149_1477286828971396005_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=g6-D7yHEQ6UAX8mTnIX&_nc_ht=scontent.fdad1-3.fna&oh=00_AfC9jyCCygvaRykzF0YzpqxCV7Whq656Jrrv6AS0dRuTpQ&oe=638D8B72"
              alt=""
            ></img>
          </div>
          <div className="flex h-96 w-full flex-col items-center justify-center text-center">
            <h2 className=" mb-5 text-xl font-semibold tracking-[0.2em]">
              ABOUT US
            </h2>
            <p className="px-10 font-lato">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
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
  );
};

export default Home;
