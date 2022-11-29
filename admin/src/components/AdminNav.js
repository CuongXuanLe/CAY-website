import { Logo } from "../constants/images";
import { BsHouseDoor, BsFileText, BsCalendar4, BsInbox, BsList, BsSignpostSplit, BsFillPersonFill, BsChevronRight } from "react-icons/bs";
import { DropDownSettings } from "../components"
const AdminNav = () => {
    return(
        <div className="h-screen w-1/3 border-r-2 border-black">
            <div className="container h-screen pt-6 text-lg tracking-widest Nav__content">
                <div className="flex items-end px-6">
                    <img className="w-24 h-full border border-black" src={Logo} alt="Logo"/>
                    <p className="ml-6 font-medium tracking-[.2em]">CAY <br/> STUDIO</p>
                </div>
                <ul className="flex flex-col w-44 justify-around mx-auto text-lg space-y-2">
                    <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-150 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                        <BsHouseDoor/>
                        <p>Home</p>
                    </li>
                    <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-150 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                        <BsFileText/>
                        <p>Guide</p>
                    </li>
                    <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-150 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                        <BsCalendar4/>
                        <p>Schedule</p>
                    </li>
                    <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-150 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                        <BsInbox/>
                        <p>Portfolio</p>
                    </li>
                    <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-150 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                        <BsList />
                        <p>Navigation</p>
                    </li>
                    <li className="flex items-center h-10 space-x-5 hover:border-b-2 border-[#a7705c] transition ease-in-out delay-150 hover:translate-x-2 hover:scale-110 duration-300 cursor-pointer">
                        <BsSignpostSplit/>
                        <p>Footer</p>
                    </li>
                </ul>
                <div className="static">
                    <button className="h-20 w-full flex items-center justify-between border-t-2 border-black px-5 text-lg">
                        <div className="flex">
                            <BsFillPersonFill className="text-5xl" />
                            <div className="ml-4 flex flex-col items-start">
                                <p className="capitalize text-lg font-bold">user name</p>
                                <p className="text-sm text-gray-600">Admin</p>
                            </div>
                        </div>
                        <BsChevronRight className="text-xl" />
                    </button>
                    <DropDownSettings />
                </div>
            </div>
        </div>
    )
}


export default AdminNav