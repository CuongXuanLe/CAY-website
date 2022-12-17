import { NavLink } from "react-router-dom";
const GuideNav = () => {
  const activeLink = "bg-red-800 text-white";
  const normalLink = "bg-white text-red-800";
  return (
    <>
      <ul className="mb-16 flex cursor-pointer justify-center text-lg font-bold uppercase text-red-900">
        <NavLink
          to="/guide/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="border border-red-800 py-2 px-6 ">Rental</li>
        </NavLink>
        <NavLink
          to="/guide/option"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="border-y border-red-800 py-2 px-6 ">option</li>
        </NavLink>
        <NavLink
          to="/guide/facility"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="border border-red-800 py-2 px-6 ">facility</li>
        </NavLink>
      </ul>
    </>
  );
};

export default GuideNav;
