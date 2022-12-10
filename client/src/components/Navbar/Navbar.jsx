import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useScrollPosotion } from "../../hooks";
import images from "../../contants/images";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  //setting mobile nav
  const [open, setOpen] = useState(false);

  //change nav color when scrolling
  const changeColorNav = useScrollPosotion();

  return (
    <div
      className={`fixed z-50 h-24 w-full justify-between shadow-sm transition-all duration-300 ease-in sm:px-5
       sm:pt-5 md:flex md:px-9 md:pt-5 ${
         changeColorNav > 0 ? "bg-white" : "bg-transparent"
       }`}
    >
      <Link to="/home">
        <div className="flex h-full cursor-pointer">
          <div className="md:w-18 md:h-18 border border-black sm:h-16 sm:w-16">
            <img src={images.Logo} alt="logo" className="h-full w-full" />
          </div>
          <div className="ml-2 flex h-[80%] flex-col font-medium tracking-[.2em] sm:mt-3 md:mt-5">
            <span>CAY</span>
            <span>STUDIO</span>
          </div>
        </div>
      </Link>
      <div
        className="absolute top-8 right-6 md:hidden"
        onClick={() => setOpen(!open)}
      >
        <GiHamburgerMenu className="h-8 w-8" />
      </div>

      <div className="h-full">
        <ul
          className={`absolute h-3/4 font-normal tracking-[.2em] transition-all duration-500 ease-in sm:hidden md:static md:flex `}
        >
          <li className="sm:my-5 md:mx-2 md:my-auto md:text-sm lg:mx-6 lg:text-base">
            <NavLink to="/home">
              <span className="pl-1 duration-100 ease-in hover:border-b-2 hover:border-[#B1816F]">
                HOME
              </span>
            </NavLink>
          </li>
          <li className="sm:my-5 md:mx-2 md:my-auto md:text-sm lg:mx-6 lg:text-base">
            <NavLink to="/guide">
              <span className="pl-1 duration-100 ease-in hover:border-b-2 hover:border-[#B1816F]">
                GUIDE
              </span>
            </NavLink>
          </li>
          <li className="sm:my-5 md:mx-2 md:my-auto md:text-sm lg:mx-6 lg:text-base">
            <NavLink to="/schedule">
              <span className="pl-1 duration-100 ease-in hover:border-b-2 hover:border-[#B1816F]">
                SCHEDULE
              </span>
            </NavLink>
          </li>
          <li className="sm:my-5 md:mx-2 md:my-auto md:text-sm lg:mx-6 lg:text-base">
            <NavLink to="/portfolio">
              <span className="pl-1 duration-100 ease-in hover:border-b-2 hover:border-[#B1816F]">
                PORTFOLIO
              </span>
            </NavLink>
          </li>
          <li className="sm:my-5 md:mx-2 md:my-auto md:text-sm lg:mx-6 lg:text-base">
            <NavLink to="/contact">
              <span className="pl-1 duration-100 ease-in hover:border-b-2 hover:border-[#B1816F]">
                CONTACT
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
