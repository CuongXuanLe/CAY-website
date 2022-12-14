import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const ListItems = ({tools}) => {

    


    return(
        <div className="flex justify-between items-center border-2 border-black px-2 py-1 rounded mb-2">
            <p>{tools}</p>
            <div className="flex justify-around w-20">
                <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                    <BsPencil />
                </button>
                <button className="text-red-600 hover:bg-red-600 hover:text-white p-2 rounded">
                    <AiOutlineDelete/>
                </button>
            </div>
        </div>
    )
}

export default ListItems