import React, { useState, useEffect } from 'react';
import { BiUpload, BiCheck } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

import axios from 'axios';

const HomeContent = () => {
    const [imageBackground, setImageBackground] = useState()
    const [imageBody, setImageBody] = useState()
    const [imageAboutUs, setImageAboutUs] = useState()
    const [title, setTitle] = useState()
    const [title2, setTitle2] = useState()
    const [subtitle, setSubtitle] = useState()
    const [description, setDescription] = useState()
    const [aboutUs, setAboutUs] = useState()

    useEffect(() =>{
        document.title = "Home Admin"
    })
    
    const handlePreviewImage = (e) => {
        const file = e.target.files[0]
        
        file.preview = URL.createObjectURL(file)

        setImageBackground(file)
    }

    useEffect(() => {
        return () => {
           imageBackground && URL.revokeObjectURL(imageBackground.preview)
        }
    }, [imageBackground])

    const handlePreviewImageBody = (e) => {
        const file = e.target.files[0]
        
        file.preview = URL.createObjectURL(file)

        setImageBody(file)
    }

    useEffect(() => {
        return () => {
            imageBody && URL.revokeObjectURL(imageBody.preview)
        }
    }, [imageBody])

    const handlePreviewImageAboutUs = (e) => {
        const file = e.target.files[0]
        
        file.preview = URL.createObjectURL(file)

        setImageAboutUs(file)
    }

    useEffect(() => {
        return () => {
            imageAboutUs && URL.revokeObjectURL(imageAboutUs.preview)
        }
    }, [imageAboutUs])

    const handleApi = async (e) => {
        e.preventDefault()

        //call api
        const url = ''
        const formData = {
            "imageBackground" : imageBackground,
            "imageBody" : imageBody,
            "imageAboutUs" : imageAboutUs,
            "title" : title,
            "title2" : title2,
            "subtitle" : subtitle,
            "description" : description,
            "aboutUs" : aboutUs,
        }
        console.log(formData)
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
                        {imageBackground && ( <img src={imageBackground.preview} alt={imageBackground.name} width="50%"/>)}
                    </div>
                    <div className="flex justify-end">
                        <button className="relative flex items-center border-2 border-black rounded w-32 px-3 py-1 mt-2 overflow-hidden hover:bg-black hover:text-white">
                            <BiUpload className="mr-3"/> Upload
                            <input type="file" className="absolute bottom-0 left-0 opacity-0 -z-1" onChange={handlePreviewImage}/>
                        </button>
                    </div>
                </div>

                <div className="mb-5">
                    <p className="mb-3">Title: </p>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-row items-center justify-between border-2 border-black w-5/12 px-2 py-1 rounded">
                            <input className="h-auto py-1 w-full outline-none" value={title} onChange={(event) => {setTitle(event.target.value)}} placeholder="Title" type="text" maxLength={200}/>
                            <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                                <BsPencil/>
                            </button>
                        </div>
                        <div className="border-b-2 w-10 border-black"></div>
                        <div className="flex flex-row items-center justify-between border-2 border-black w-5/12 px-2 py-1 rounded">
                            <input className="h-auto py-1 w-full outline-none" placeholder="Subtitle" value={subtitle} onChange={(event) => {setSubtitle(event.target.value)}} type="text" maxLength={100}/>
                            <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                                <BsPencil/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <p className="mb-3">Description: </p>
                    <textarea rows="4" cols="50" placeholder="Description" value={description} onChange={(event) => {setDescription(event.target.value)}} className="border-2 border-black rounded p-2 w-full"></textarea>
                </div>
            </div>
            
            <p>Portfolio & Blog section: </p>
            <div className="px-10 mt-2">
                <div className="mb-2">                   
                    <p className="mb-3">Background Image:</p>
                    <div className="h-auto p-5 w-full border-2 border-black rounded">
                        {imageBody && ( <img src={imageBody.preview} alt={imageBody.name} width="50%"/>)}
                    </div>
                    <div className="flex justify-end">
                        <button className="relative flex items-center border-2 border-black rounded w-32 px-3 py-1 mt-2 overflow-hidden hover:bg-black hover:text-white">
                            <BiUpload className="mr-3"/> Upload
                            <input type="file" className="absolute bottom-0 left-0 opacity-0 -z-1" onChange={handlePreviewImageBody}/>
                        </button>
                    </div>
                    <p className="mb-3">Title: </p>
                    <div className="flex flex-row items-center justify-between border-2 border-black w-full my-2 px-2 py-1 rounded">
                        <input className="h-auto py-1 outline-none" value={title2} onChange={(event) => {setTitle2(event.target.value)}} placeholder="Title" type="text" maxLength={200}/>
                        <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                            <BsPencil/>
                        </button>
                    </div>
                </div>
            </div>

            <p className="capitalize">About us section: </p>
            <div className="px-10 mt-2">
                <div className="mb-2">                   
                    <p className="mb-3">Background Image:</p>
                    <div className="h-auto p-5 w-full border-2 border-black rounded">
                        {imageAboutUs && ( <img src={imageAboutUs.preview} alt={imageAboutUs.name} width="50%"/>)}
                    </div>
                    <div className="flex justify-end">
                        <button className="relative flex items-center border-2 border-black rounded w-32 px-3 py-1 mt-2 overflow-hidden hover:bg-black hover:text-white">
                            <BiUpload className="mr-3"/> Upload
                            <input type="file" className="absolute bottom-0 left-0 opacity-0 -z-1" onChange={handlePreviewImageAboutUs}/>
                        </button>
                    </div>
                </div>
                <div className="mb-2">
                    <p className="mb-3">About us: </p>
                    <textarea rows="4" cols="50" placeholder="About us" value={aboutUs} onChange={(event) => {setAboutUs(event.target.value)}} className="border-2 border-black rounded p-2 w-full"></textarea>
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