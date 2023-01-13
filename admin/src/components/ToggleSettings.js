import { NavLink } from "react-router-dom";
import { BsBoxArrowLeft, BsGear } from "react-icons/bs"

export default function ToggleSettings() {
  

  return (
    <div className="absolute bottom-0 2xl:ml-96 xl:ml-96 lg:ml-80 bg-white w-64 rounded-lg border-2 border-black overflow-hidden">
      <div className="capitalize">
          <p className="px-4 pt-1">CAY studio</p>
          <p className="px-4 text-gray-400">Admin</p>
          <NavLink to="/changePassword">
            <div className="flex items-center px-4 py-1 hover__primary">
                <BsGear/>
                <p className="ml-3">change password</p>
            </div>
          </NavLink> 
      </div>
      <hr className="border-black py"/>
      <NavLink to="/Login">
          <div className="flex justify-start items-center text-[#E93D3D] px-4 py-1 hover__primary">  
              <BsBoxArrowLeft />
              <p className="ml-3">Log out</p>
          </div>
      </NavLink>
    </div>
  );
}