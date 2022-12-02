import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail, SiDiscord } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

const Sidebar = () => {
  //open sidebar
  const [openSidebar, setOpenSidebar] = useState(false);
  const hideSidebar = () => {
    if (window.scrollY >= 1200) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  };

  window.addEventListener("scroll", hideSidebar);

  return (
    <div
      className={`fixed right-0 top-[30%] z-10 bg-blurwhite font-lato opacity-100 transition-all duration-500 ease-out ${
        openSidebar ? "" : "translate-x-[100%]"
      }`}
    >
      <h2 className="mx-auto my-2 text-center text-xl text-slate-800">
        Follow us
      </h2>
      <ul className="list-none py-2  text-slate-800">
        <li className="group px-5 py-2 duration-200 ease-in hover:bg-black">
          <a href="https://www.facebook.com/CAYYYYYYYY.studio">
            <span className="flex items-center justify-start">
              <FaFacebookF className="mr-4 h-[25px] w-[25px] group-hover:text-white" />
              <p className="text-lg group-hover:text-white">Facebook</p>
            </span>
          </a>
        </li>
        <li className="group px-5 py-2 duration-200 ease-in hover:bg-black">
          <a href="https://www.instagram.com/cay.stu/">
            <span className="flex items-center justify-start">
              <BsInstagram className="mr-4 h-[25px] w-[25px] group-hover:text-white" />
              <p className="text-lg group-hover:text-white">Instagram</p>
            </span>
          </a>
        </li>
        <li className="group px-5 py-2 duration-200 ease-in hover:bg-black">
          <a href="https://www.google.com/intl/vi/gmail/about/">
            <span className="flex items-center justify-start">
              <SiGmail className="mr-4 h-[25px] w-[25px] group-hover:text-white" />
              <p className="text-lg group-hover:text-white">Gmail</p>
            </span>
          </a>
        </li>
        <li className="group px-5 py-2 duration-200 ease-in hover:bg-black">
          <a href="https://discord.com/">
            <span className="flex items-center justify-start">
              <SiDiscord className="mr-4 h-[25px] w-[25px] group-hover:text-white" />
              <p className="text-lg group-hover:text-white">Discord</p>
            </span>
          </a>
        </li>
      </ul>
      <button
        className="absolute -left-[28px] top-[10px] h-12 w-7 rounded-l-md bg-[#333]"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <MdArrowForwardIos
          className={`h-7 w-7 text-white ${
            openSidebar
              ? "-rotate-180 duration-[600ms] ease-in-out"
              : "duration-[600ms] ease-in-out"
          }`}
        />
      </button>
    </div>
  );
};

export default Sidebar;
