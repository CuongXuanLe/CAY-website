import React, { useState, useEffect } from 'react';
import { BiUpload, BiCheck } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

import axios from 'axios';

const HomeContent = () => {
    const [image, setImage] = useState()
    
    const handlePreviewImage = (e) => {
        const file = e.target.files[0]
        
        file.preview = URL.createObjectURL(file)

        setImage(file)
    }

    useEffect(() => {
        return () => {
           image && URL.revokeObjectURL(image.preview)
        }
    }, [image])

    const handleApi = () => {
        //call api
        const url = ''
        const formData = new FormData()
        formData.append('image', image)
        axios.post(url, formData)
        .then((res) => {
            console.log(res.data)
            alert('success')
        })
        .catch((err) => {
            alert('service error')
            console.log(err)
        })
    }

    return (
        <div className="text-xl">
            <p>Home header section: </p>
            <div className="px-10 mt-2">
                <div className="mb-2">                   
                    <p className="mb-3">Background Image:</p>
                    <div className="h-auto p-5 w-full border-2 border-black rounded">
                        {image && ( <img src={image.preview} alt={image.name} width="50%"/>)}
                    </div>
                    <div className="flex justify-end">
                        <button className="relative flex items-center border-2 border-black rounded w-32 px-3 py-1 mt-2 overflow-hidden hover:bg-black hover:text-white">
                            <BiUpload className="mr-3"/> Upload
                            <input type="file" className="absolute bottom-0 left-0 opacity-0 -z-1" onChange={handlePreviewImage}/>
                        </button>
                        {/* <button onClick={handleApi} className="w-32 flex items-center justify-center text-white bg-[#a7705c] mt-2 rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button> */}
                    </div>
                </div>

                <div className="mb-5">
                    <p className="mb-3">Title: </p>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-row items-center justify-between border-2 border-black w-5/12 px-2 py-1 rounded">
                            <input className="h-auto py-1 w-full outline-none" placeholder="Title" type="text" maxLength={200}/>
                            <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                                <BsPencil/>
                            </button>
                        </div>
                        <div className="border-b-2 w-10 border-black"></div>
                        <div className="flex flex-row items-center justify-between border-2 border-black w-5/12 px-2 py-1 rounded">
                            <input className="h-auto py-1 w-full outline-none" placeholder="Subtitle" type="text" maxLength={100}/>
                            <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                                <BsPencil/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <p className="mb-3">Description: </p>
                    <textarea rows="4" cols="50" placeholder="Description" className="border-2 border-black rounded p-2 w-full"></textarea>
                </div>
            </div>
            
            <p>Portfolio & Blog section: </p>
            <div className="px-10 mt-2">
                <div className="mb-2">                   
                    <p className="mb-3">Background Image:</p>
                    <div className="h-auto p-5 w-full border-2 border-black rounded">
                        {image && ( <img src={image.preview} alt={image.name} width="50%"/>)}
                    </div>
                    <div className="flex justify-end">
                        <button className="relative flex items-center border-2 border-black rounded w-32 px-3 py-1 mt-2 overflow-hidden hover:bg-black hover:text-white">
                            <BiUpload className="mr-3"/> Upload
                            <input type="file" className="absolute bottom-0 left-0 opacity-0 -z-1" onChange={handlePreviewImage}/>
                        </button>
                        {/* <button onClick={handleApi} className="w-32 flex items-center justify-center text-white bg-[#a7705c] mt-2 rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button> */}
                    </div>
                </div>
            </div>

            <p className="capitalize">About us section: </p>
            <div className="px-10 mt-2">
                <div className="mb-2">                   
                    <p className="mb-3">Background Image:</p>
                    <div className="h-auto p-5 w-full border-2 border-black rounded">
                        {image && ( <img src={image.preview} alt={image.name} width="50%"/>)}
                    </div>
                    <div className="flex justify-end">
                        <button className="relative flex items-center border-2 border-black rounded w-32 px-3 py-1 mt-2 overflow-hidden hover:bg-black hover:text-white">
                            <BiUpload className="mr-3"/> Upload
                            <input type="file" className="absolute bottom-0 left-0 opacity-0 -z-1" onChange={handlePreviewImage}/>
                        </button>
                        {/* <button onClick={handleApi} className="w-32 flex items-center justify-center text-white bg-[#a7705c] mt-2 rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button> */}
                    </div>
                </div>
                <div className="mb-2">
                    <p className="mb-3">About us: </p>
                    <textarea rows="4" cols="50" placeholder="About us" className="border-2 border-black rounded p-2 w-full"></textarea>
                </div>
                <div className="flex flex-row justify-end mt-10">
                    <button className="w-48 h-10 flex items-center justify-center bg-gray-300 rounded hover:bg-black hover:text-white hover:border-2 border-black "> Cancel </button>
                    <button onClick={handleApi} className="w-48 h-10 flex items-center justify-center text-white bg-[#a7705c] rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button>
                </div>
            </div>
        </div>
    )
}

export default HomeContent