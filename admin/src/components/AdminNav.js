import { useState } from "react";
import { Logo } from "../constants/images";
import 
    {   BsHouseDoor,
        BsFileText,
        BsCalendar4,
        BsInbox,
        BsList,
        BsSignpostSplit,
        BsFillPersonFill,
        BsChevronRight 
    } from "react-icons/bs";
import { ToggleSettings } from "../components"
import { NavLink } from "react-router-dom";

const AdminNav = () => {
    const [showSettings, setShowSettings] = useState(false);
    const handleSettings = () => {
        setShowSettings(!showSettings);
    }

    return(
        <div className="h-screen w-1/3 border-r-2 border-black">
            <div className="container h-screen pt-6 text-lg tracking-widest Nav__content">
                <div className="flex items-end px-6">
                    <img className="w-24 h-full border border-black" src={Logo} alt="Logo"/>
                    <p className="ml-6 font-medium tracking-[.2em]">CAY <br/> STUDIO</p>
                </div>
                <ul className="flex flex-col w-44 justify-around mx-auto text-lg space-y-2">
                    <NavLink to="/">
                        <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-50 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                            <BsHouseDoor/>
                            <p>Home</p>
                        </li>
                    </NavLink>
                    <NavLink to="/AdminGuide">
                        <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-50 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                            <BsFileText/>
                            <p>Guide</p>
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-50 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                            <BsCalendar4/>
                            <p>Schedule</p>
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-50 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                            <BsInbox/>
                            <p>Portfolio</p>
                        </li>
                    </NavLink>
                    <NavLink to="/">
                        <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-50 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                            <BsList />
                            <p>Navigation</p>
                        </li>
                    </NavLink>
                    <NavLink to="/AdminFooter">
                        <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-50 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                            <BsSignpostSplit/>
                            <p>Footer</p>
                        </li>
                    </NavLink>
                </ul>
                <div className="static">
                    <button className="h-auto py-2 w-full flex items-center justify-between border-t-2 border-black px-5 text-lg hover__primary" onClick={handleSettings}>
                        <div className="flex">
                            <BsFillPersonFill className="text-5xl" />
                            <div className="ml-4 flex flex-col items-start">
                                <p className="capitalize text-lg font-bold">user name</p>
                                <p className="text-sm">Admin</p>
                            </div>
                        </div>
                        <BsChevronRight className="text-xl" />
                    </button>
                    {showSettings && <ToggleSettings />}
                </div>
            </div>
        </div>
    )
}


export default AdminNav