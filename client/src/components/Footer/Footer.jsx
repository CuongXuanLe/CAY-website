import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-4 border-t-[2px] border-[#E0E0E0]">
      <div className="grid h-24 grid-cols-4 items-center">
        <div>
          <h2 className="ml-2 font-lato font-semibold">CAY studio</h2>
        </div>
        <div>
          <p className="text-sm font-normal">
            46/10A Dung Si Thanh Khe St.
            <br />
            Thanh Khe Tay, Da Nang 550000
          </p>
        </div>
        <div>
          <p className="text-sm font-normal">
            +84 (0) 7 6666 0952 <br />
            caystudio.contact@gmail.com
          </p>
        </div>
        <div className="flex ">
          <div className="group mx-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-black duration-500 ease-in-out hover:bg-black">
            <a href="https://www.facebook.com/CAYYYYYYYY.studio">
              <FaFacebookF className="duration-500 ease-in-out group-hover:text-white" />
            </a>
          </div>
          <div className="group mx-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-black duration-500 ease-in-out hover:bg-black">
            <a href="https://www.instagram.com/cay.stu/">
              <SiInstagram className="duration-500 ease-in-out group-hover:text-white" />
            </a>
          </div>
          <div className="group mx-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-black duration-500 ease-in-out hover:bg-black">
            <SiGmail className="duration-500 ease-in-out group-hover:text-white" />
          </div>
        </div>
      </div>
      <div className="ml-2">
        <p className="font-lato text-sm ">
          2022 All rights reserved Development by CAY studio
        </p>
      </div>
    </div>
  );
};

export default Footer;
