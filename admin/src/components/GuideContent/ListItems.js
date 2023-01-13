import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios"
import React,{useState} from "react"

const ListItems = ({tools, index}) => {
    const [editItem, setEditItem] = useState();

    const updateItem = async (index) => {
        const formEditItem = {
            'item': editItem,
        }
        await axios.patch(`http://127.0.0.1:8000/api/patch-items/${index}`, formEditItem)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        window.location.reload(false);
    }

    const deleteItem = async(id) => {
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-items/${id}`)
        .then(({result})=> {
            console.log('success')
            alert('delete success')
        })
        .catch((error) => {
            console.log(error)
        })
        window.location.reload(false);
    }
    return(
        <div className="flex justify-between items-center border-2 border-black px-2 py-1 rounded mb-2">
            <input className="h-auto py-1 w-full outline-none" value={editItem || ''} onChange={(event)=>setEditItem(event.target.value)} placeholder={tools}/>
            <div className="flex justify-around w-20">
                <button onClick={() => updateItem(index)} className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                    <BsPencil />
                </button>
                <button onClick={() => deleteItem(index)} className="text-red-600 hover:bg-red-600 hover:text-white p-2 rounded">
                    <AiOutlineDelete/>
                </button>
            </div>
        </div>
    )
}

export default ListItems