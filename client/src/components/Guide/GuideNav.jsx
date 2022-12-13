// import { Link } from "react-router-dom"
const GuideNav = () => {
    return(
        <>
            <ul className="uppercase flex text-red-900 justify-center cursor-pointer">
                <li className="py-2 px-6 text-lg font-bold border border-red-800 hover:bg-red-800 hover:text-white">
                    rental
                </li>
                <li className="py-2 px-6 text-lg font-bold border-y border-red-800 hover:bg-red-800 hover:text-white">option</li>
                <li className="py-2 px-6 text-lg font-bold border border-red-800 hover:bg-red-800 hover:text-white">facility</li>
            </ul>
        </>
    )
}

export default GuideNav