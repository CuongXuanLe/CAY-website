import { BiCheck } from "react-icons/bi";

const ChangePwd = () => {
    return(
        <div className="text-xl">
            <p>Change password: </p>
            <div className="px-10 mt-2">
                <div className="mb-3">
                    <p className="mb-3">Current password </p>
                    <input className="h-auto py-1 w-full border-2 border-black px-2 rounded" placeholder="Current password" type="password" maxLength={200}/>
                </div>
                <div className="mb-3">
                    <p className="mb-3">Enter new password </p>
                    <input className="h-auto py-1 w-full border-2 border-black px-2 rounded" placeholder="Enter new password" type="password" maxLength={200}/>
                </div>
                <div className="mb-3">
                    <p className="mb-3">Confirm password </p>
                    <input className="h-auto py-1 w-full border-2 border-black px-2 rounded" placeholder="Confirm password" type="password" maxLength={200}/>
                </div>

                <div className="flex flex-row justify-end">
                    <button className="w-32 h-10 flex items-center justify-center bg-gray-300 rounded hover:bg-black hover:text-white hover:border-2 border-black "> Cancel </button>
                    <button className="w-32 h-10 flex items-center justify-center text-white bg-[#a7705c] rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button>
                </div>
            </div>
        </div>
    )
}

export default ChangePwd