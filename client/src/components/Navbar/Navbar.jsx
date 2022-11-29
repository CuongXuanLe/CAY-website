import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import images from "../../contants/images";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    //setting mobile nav
    const [open,setOpen] = useState(false);

    //change nav color when scrolling
    const [color,setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 96) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);

    return(
        <div className={`fixed md:flex justify-between w-full h-24 md:pt-5 md:px-9 sm:pt-5 sm:px-5 ${color ? 'bg-white' : 'bg-transparent'} transition-all ease-in duration-300`}>

            <div className="flex h-full">
                <div className="md:w-18 md:h-18 border border-black sm:w-16 sm:h-16">
                    <img src={images.Logo} alt="logo" className="w-full h-full"/>
                </div>
                <div className="flex flex-col h-[80%] ml-2 md:mt-5 font-medium tracking-[.2em] sm:mt-3">
                    <span>CAY</span>  
                    <span>STUDIO</span>
                </div>
            </div>
            <div className="md:hidden absolute top-8 right-6" onClick={() => setOpen(!open)}>
                <GiHamburgerMenu className="w-8 h-8" />
            </div>

            <div className="h-full">
                <ul className={`md:flex font-normal h-3/4 tracking-[.2em] absolute md:static transition-all duration-500 ease-in ${open ? '' : 'top-[-490px]'}`}>
                    <li className="lg:mx-6 lg:text-base md:mx-2 md:my-auto md:text-sm sm:my-5"><NavLink to="/home" ><span className="pl-1 hover:border-b-2 hover:border-[#B1816F]">HOME</span></NavLink></li>
                    <li className="lg:mx-6 lg:text-base md:mx-2 md:my-auto md:text-sm sm:my-5"><NavLink to="/guide"><span className="pl-1 hover:border-b-2 hover:border-[#B1816F]">GUIDE</span></NavLink></li>
                    <li className="lg:mx-6 lg:text-base md:mx-2 md:my-auto md:text-sm sm:my-5"><NavLink to="/schedule"><span className="pl-1 hover:border-b-2 hover:border-[#B1816F]">SCHEDULE</span></NavLink></li>
                    <li className="lg:mx-6 lg:text-base md:mx-2 md:my-auto md:text-sm sm:my-5"><NavLink to="/portfolio"><span className="pl-1 hover:border-b-2 hover:border-[#B1816F]">PORTFOLIO</span></NavLink></li>
                    <li className="lg:mx-6 lg:text-base md:mx-2 md:my-auto md:text-sm sm:my-5"><NavLink to="/contact"><span className="pl-1 hover:border-b-2 hover:border-[#B1816F]">CONTACT</span></NavLink></li> 
                </ul>
            </div>

        </div>
    )
}

export default Navbar;