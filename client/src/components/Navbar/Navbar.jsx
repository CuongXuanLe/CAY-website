import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import images from "../../contants/images";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const [open,setOpen] = useState(false);

    return(
        <div className="md:flex justify-between bg-inherit w-full h-28 md:pt-8 md:px-9 sm:pt-5 sm:px-5">

            <div className="flex h-full">
                <div className="md:w-20 md:h-20 border border-black sm:w-14 sm:h-14">
                    <img src={images.Logo} alt="logo" className="w-full h-full"/>
                </div>
                <div className="flex flex-col h-[80%] ml-2 mt-0.5 md:justify-end font-medium tracking-[.2em] sm:mt-3">
                    <span>CAY</span>  
                    <span>STUDIO</span>
                </div>
            </div>
            <div className="md:hidden absolute top-8 right-6" onClick={() => setOpen(!open)}>
                <GiHamburgerMenu className="w-8 h-8" />
            </div>

            <div className="h-full">
                <ul className={`md:flex font-normal h-3/4 tracking-[.2em] absolute md:static transition-all duration-500 ease-in ${open ? '' : 'top-[-490px]'}`}>
                    <li className="md:mx-6 md:my-auto sm:my-5"><NavLink to="/home" ><span className="pl-1 hover:border-b-2 hover:border-navybrown">HOME</span></NavLink></li>
                    <li className="md:mx-6 md:my-auto sm:my-5"><NavLink to="/guide"><span className="pl-1 hover:border-b-2 hover:border-navybrown">GUIDE</span></NavLink></li>
                    <li className="md:mx-6 md:my-auto sm:my-5"><NavLink to="/schedule"><span className="pl-1 hover:border-b-2 hover:border-navybrown">SCHEDULE</span></NavLink></li>
                    <li className="md:mx-6 md:my-auto sm:my-5"><NavLink to="/portfolio"><span className="pl-1 hover:border-b-2 hover:border-navybrown">PORTFOLIO</span></NavLink></li>
                    <li className="md:mx-6 md:my-auto sm:my-5"><NavLink to="/contact"><span className="pl-1 hover:border-b-2 hover:border-navybrown">CONTACT</span></NavLink></li> 
                </ul>
            </div>

        </div>
    )
}

export default Navbar;