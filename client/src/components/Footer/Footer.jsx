import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Footer = () => {

  //getAPI
  const [footercontents, setFootercontents] = useState([]);
  const apiFooter = "http://127.0.0.1:8000/api/get-footer";
  useEffect(() => {
    async function getFooterData() {
      const res = await axios.get(apiFooter);
      setFootercontents(res.data.data)
    }
    getFooterData();
  }, []);

  return (
    <>
      <div className="mt-4 border-t-[2px] border-[#E0E0E0]">
        <div className="grid h-24 grid-cols-4 items-center">
          <div>
            {footercontents.map((footercontent) => (
              <h2 className="ml-2 font-lato font-semibold">
                {footercontent.name}
              </h2>
            ))}
          </div>
          <div>
            {footercontents.map((footercontent) => (
              <p
                key={footercontent.id}
                className="w-[16rem] text-sm font-normal"
              >
                {footercontent.address}
              </p>
            ))}
          </div>
          <div>
            {footercontents.map((footercontent) => (
              <p key={footercontent.id} className="text-sm font-normal">
                {footercontent.phone_number} <br />
                {footercontent.email}
              </p>
            ))}
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
    </>
  );
};

export default Footer;
