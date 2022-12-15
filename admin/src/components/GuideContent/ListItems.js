import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios"

const ListItems = ({tools, index}) => {
    // const editProduct = (id) => {
    //     naviga
    // }
    const deleteItem = async(id) => {
        // const url = "`http://127.0.0.1:8000/api/delete-items/${id}`" 
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
            <p>{tools}</p>
            <div className="flex justify-around w-20">
                <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
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