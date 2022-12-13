import { NavLink  } from "react-router-dom"
const GuideNav = () => {
    const activeLink = 'bg-red-800 text-white' 
    const normalLink = 'bg-white text-red-800'
    return(
        <>
            <ul className="uppercase flex text-red-900 justify-center cursor-pointer text-lg font-bold mb-16">
                <NavLink to="/guide/" className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <li className="py-2 px-6 border border-red-800 ">
                        Rental
                    </li>
                </NavLink>
                <NavLink to="/guide/option" className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <li className="py-2 px-6 border-y border-red-800 ">
                        option
                    </li>
                </NavLink>
                <NavLink to="/guide/facility" className={({isActive}) => (isActive ? activeLink : normalLink)}>
                    <li className="py-2 px-6 border border-red-800 ">
                        facility
                    </li>
                </NavLink>
            </ul>
        </>
    )
}

export default GuideNav