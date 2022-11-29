import { Logo } from "../constants/images";
import { BsHouseDoor, BsFileText, BsCalendar4, BsInbox, BsList, BsSignpostSplit } from "react-icons/bs";

const AdminNav = () => {
    return(
        <div className="h-screen w-1/5 border-r-2 border-black">
            <div className="container h-screen pt-10 text-lg tracking-widest Nav__content">
                <div className="flex items-end px-10">
                    <img className="w-24 h-full border border-black" src={Logo} alt="Logo"/>
                    <p className="ml-6 font-medium tracking-[.2em]">CAY <br/> STUDIO</p>
                </div>
                <ul className="flex flex-col justify-around pl-16 text-xl space-y-5">
                    <li className="flex items-center space-x-5 hover:border-b-2 border-[#a7705c]">
                        <BsHouseDoor/>
                        <p>Home</p>
                    </li>
                    <li className="flex items-center space-x-5 hover:border-b-2 border-[#a7705c]">
                        <BsFileText/>
                        <p>Guide</p>
                    </li>
                    <li className="flex items-center space-x-5 hover:border-b-2 border-[#a7705c]">
                        <BsCalendar4/>
                        <p>Schedule</p>
                    </li>
                    <li className="flex items-center space-x-5 hover:border-b-2 border-[#a7705c]">
                        <BsInbox/>
                        <p>Portfolio</p>
                    </li>
                    <li className="flex items-center space-x-5 hover:border-b-2 border-[#a7705c]">
                        <BsList />
                        <p>Navigation</p>
                    </li>
                    <li className="flex items-center space-x-5 hover:border-b-2 border-[#a7705c]">
                        <BsSignpostSplit/>
                        <p>Footer</p>
                    </li>
                </ul>
                <div className="h-24 border-t-2 border-black px-10">
                    asldasjdlkasdj
                </div>
            </div>
        </div>
    )
}


export default AdminNav