import { BiCheck } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

const FooterContent = () => {
    return (
        <div className="text-xl">
            <div className="mb-3">
                <p className="mb-3">Name studio: </p>
                <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                    <input className="h-auto py-1 w-full outline-none" placeholder="CAY studio" type="text" maxLength={200}/>
                    <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                        <BsPencil/>
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <p className="mb-3">Address: </p>
                <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                    <input className="h-auto py-1 w-full outline-none" placeholder="46/10A Dung Si Thanh Khe St." type="text" maxLength={200}/>
                    <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                        <BsPencil/>
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <p className="mb-3">Phone number:</p>
                <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                    <input className="h-auto py-1 w-full outline-none" placeholder="+84 (0) 7 6666 0952" type="text" maxLength={200}/>
                    <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                        <BsPencil/>
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <p className="mb-3">Email:</p>
                <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                    <input className="h-auto py-1 w-full outline-none" placeholder="caystudio.contact@gmail.com" type="email" maxLength={200}/>
                    <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                        <BsPencil/>
                    </button>
                </div>
            </div>

            <div className="flex flex-row justify-end mt-10">
                <button className="w-48 h-10 flex items-center justify-center bg-gray-300 rounded hover:bg-black hover:text-white hover:border-2 border-black "> Cancel </button>
                <button className="w-48 h-10 flex items-center justify-center text-white bg-[#a7705c] rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button>
            </div>
        </div>
    )
}

export default FooterContent