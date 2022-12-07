import React, { useState, useEffect } from 'react';
import { BiUpload, BiCheck } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { ListItems, AddItem } from "../../components"

const GuideContent = () => {
    const [addItem, setAddItem] = useState(false);
    useEffect(() =>{
        document.title = "Guide Page"
    })

    const handleAddItem = () => {
        setAddItem(!addItem);
    }

    const [imageQR, setImageQR] = useState()
    
    const handlePreviewImageQR = (e) => {
        const file = e.target.files[0]
        
        file.preview = URL.createObjectURL(file)

        setImageQR(file)
    }

    useEffect(() => {
        return () => {
           imageQR && URL.revokeObjectURL(imageQR.preview)
        }
    }, [imageQR])

    

    return (
        <div className="text-xl">
            <p>Rental: </p>
            <div className="px-10 mt-2">
                <div className="mb-3">
                    <p className="mb-3">Rent cost:</p>
                    <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                        <input className="h-auto py-1 w-full outline-none" placeholder="CAY studio" type="text" maxLength={200}/>
                        <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                            <BsPencil/>
                        </button>
                    </div>
                </div>
                <div className="mb-3">
                    <p className="mb-3">Deposit price:</p>
                    <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                        <input className="h-auto py-1 w-full outline-none" placeholder="46/10A Dung Si Thanh Khe St." type="text" maxLength={200}/>
                        <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                            <BsPencil/>
                        </button>
                    </div>
                </div>
                <div className="mb-3">
                    <p className="mb-3">Deposit information:</p>
                    <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                        <input className="h-auto py-1 w-full outline-none" placeholder="+84 (0) 7 6666 0952" type="text" maxLength={200}/>
                        <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                            <BsPencil/>
                        </button>
                    </div>
                </div>
                <div className="mb-2">                   
                    <p className="mb-3">QR payment image(optional):</p>
                    <div className="h-auto p-5 w-full border-2 border-black rounded">
                        {imageQR && ( <img src={imageQR.preview} alt={imageQR.name} width="50%"/>)}
                    </div>
                    <div className="flex justify-end">
                        <button className="relative flex items-center border-2 border-black rounded w-32 px-3 py-1 mt-2 overflow-hidden hover:bg-black hover:text-white">
                            <BiUpload className="mr-3"/> Upload
                            <input type="file" className="absolute bottom-0 left-0 opacity-0 -z-1" onChange={handlePreviewImageQR}/>
                        </button>
                        {/* <button onClick={handleApi} className="w-32 flex items-center justify-center text-white bg-[#a7705c] mt-2 rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button> */}
                    </div>
                </div>
                <div className="mb-3">
                    <p className="mb-3">Link:</p>
                    <div className="flex items-center">
                        <p className="mr-5">FanPage: </p>
                        <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                            <input className="h-auto py-1 w-full outline-none" placeholder="caystudio.contact@gmail.com" type="email" maxLength={200}/>
                            <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                                <BsPencil/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p>Option: </p>
            <div className="px-10 mt-2 mb-10">
                <ListItems />
                <ListItems />
                <ListItems />
                <ListItems />
                <div className="float-right">
                    <button 
                        onClick={() => setAddItem(true)}
                        className="flex flex-row items-center justify-around w-32 bg-[#a7705c] text-white px-2 py-1 rounded"
                    >
                        <AiOutlinePlus/>
                        <p>Add item</p>
                    </button>
                </div>
                <AddItem onClose={handleAddItem} visible={addItem}/>
            </div>
            <p>Facility: </p>
            <div className="px-10 mt-2">
                <div className="mb-2">                   
                    <p className="mb-3">Studio space image:</p>
                    <div className="h-auto p-5 w-full border-2 border-black rounded">
                        {imageQR && ( <img src={imageQR.preview} alt={imageQR.name} width="50%"/>)}
                    </div>
                    <div className="flex justify-end">
                        <button className="relative flex items-center border-2 border-black rounded w-32 px-3 py-1 mt-2 overflow-hidden hover:bg-black hover:text-white">
                            <BiUpload className="mr-3"/> Upload
                            <input type="file" className="absolute bottom-0 left-0 opacity-0 -z-1" onChange={handlePreviewImageQR}/>
                        </button>
                        {/* <button onClick={handleApi} className="w-32 flex items-center justify-center text-white bg-[#a7705c] mt-2 rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button> */}
                    </div>
                </div>
                <div className="flex flex-row justify-end mt-10">
                    <button className="w-48 h-10 flex items-center justify-center bg-gray-300 rounded hover:bg-black hover:text-white hover:border-2 border-black "> Cancel </button>
                    <button className="w-48 h-10 flex items-center justify-center text-white bg-[#a7705c] rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button>
                </div>
            </div>
        </div>
    )
}

export default GuideContent