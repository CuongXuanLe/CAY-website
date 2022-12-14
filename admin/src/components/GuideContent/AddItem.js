import { AiOutlinePlus } from "react-icons/ai";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const AddItem = ({ visible, onClose }) => {
    
    const [Item, createItem] = useState();

    //post - api 
    const addItem = async (e) => {
        e.preventDefault();
        const CreateItemApi = "http://127.0.0.1:8000/api/post-items"
        const formCreateData = {
            "item" : Item, 
        }
        console.log(formCreateData);
        await axios.post(CreateItemApi, formCreateData)
        .then(({res}) => {
            // console.log(res)
            alert("success");
        })
        .catch((err) => {
            console.log(err);
            alert("service error");
        });
        window.location.reload(false);
    }

    const handleOnClose = (e) => {
        if (e.target.id === "AddItem") onClose();
      };
      if (!visible) return null;

    return (
        <div 
            id="AddItem"
            onClick={handleOnClose}
            // onClick={console.log('click')}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
        >
            <form method="POST" className="w-1/3 bg-white h-60 px-4 rounded-lg">
                <div className="relative">
                    <p className="text-2xl font-semibold py-5">Add devices</p>
                    <p onClick={onClose} className="absolute top-1 right-0 text-3xl px-3 cursor-pointer">x</p>
                </div>
                <div className="flex items-center space-x-3">
                    <input
                        type="text"
                        placeholder="e.g: mirror"
                        value={Item || ''}
                        onChange={(event) => {createItem(event.target.value)}}
                        className="px-2 py-2 text-lg rounded border-2 border-black w-full"
                    />
                </div>
                <div className="flex items-center justify-end mt-8">
                    <button className="bg-gray-300 hover:bg-slate-400 px-5 py-2 text-lg rounded " onClick={onClose}>Cancel</button>
                    <button type="submit" onClick={(event) => addItem(event)} className="flex flex-row items-center justify-around w-36 bg-[#a7705c] text-white px-2 py-2 rounded ml-5">
                        <AiOutlinePlus/>
                        <p>Add item</p>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddItem