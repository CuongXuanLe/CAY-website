import {Link} from "react-router-dom";

export default function DropDownSettings() {
    return (
      <div
        class="absolute bottom-0 left-1/4 bg-white w-48 rounded-lg border-2 border-black overflow-hidden"
      >
        <p class="block px-4 py-2 mt-2 text-black">
          User: <span>OT to die</span>
        </p>
        <Link to="/profile">
          <div
          class="flex justify-start items-center px-4 py-2 text-gray-300 hover:bg-indigo-500"
          >
          {/* <img class="w-4 mr-2" src={user} alt="profile" /> My Profile */}
          </div>
        </Link>
        <hr className="border-black" />
        <Link to="/">
          <div class="flex justify-start items-center px-4 hover:bg-indigo-500">  
            {/* <img class="w-5 mr-2" src={logout} alt="logout"/>  */}
            <div
            class="py-2 text-red-600  cursor-pointer"
            >
            Log out
            </div>
          </div>
        </Link>
      </div>
    );
  }