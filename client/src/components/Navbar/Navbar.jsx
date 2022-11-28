import React from "react";
import { NavLink } from "react-router-dom";
import images from "../../contants/images";



const Navbar = () => {
    return(
        <div className="flex justify-between bg-inherit w-full h-28 pt-8 px-9" >
            <div className="flex h-full">
                <div className="w-20 h-20 border border-black ">
                    <img src={images.Logo} alt="logo" className="w-full h-full"/>
                </div>
                <div className="flex flex-col h-[80px] ml-2 mt-0.5 justify-end font-medium tracking-[.2em]">
                    <span>CAY</span>  
                    <span>STUDIO</span>
                </div>
            </div>

            <div className="h-full">
                <ul className="flex font-normal h-3/4 tracking-[.2em]">
                    <li className="mx-6 my-auto hover:border-b-2 hover:border-navybrown"><NavLink to="/home" ><span className="pl-1">HOME</span></NavLink></li>
                    <li className="mx-6 my-auto hover:border-b-2 hover:border-navybrown"><NavLink to="/guide"><span className="pl-1">GUIDE</span></NavLink></li>
                    <li className="mx-6 my-auto hover:border-b-2 hover:border-navybrown"><NavLink to="/schedule"><span className="pl-1">SCHEDULE</span></NavLink></li>
                    <li className="mx-6 my-auto hover:border-b-2 hover:border-navybrown"><NavLink to="/portfolio"><span className="pl-1">PORTFOLIO</span></NavLink></li>
                    <li className="mx-6 my-auto hover:border-b-2 hover:border-navybrown"><NavLink to="/contact"><span className="pl-1">CONTACT</span></NavLink></li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar;