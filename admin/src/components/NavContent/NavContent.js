import { BiUpload, BiCheck } from "react-icons/bi";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NavContent = () => {
    const [imageLogo, setImageLogo] = useState()
    
    const handlePreviewImageLogo = (e) => {
        const file = e.target.files[0]
        
        file.preview = URL.createObjectURL(file)

        setImageLogo(file)
    }

    useEffect(() => {
        return () => {
           imageLogo && URL.revokeObjectURL(imageLogo.preview)
        }
    }, [imageLogo])

    const handleApi = async (e) => {
        e.preventDefault()
        //call api
        const url = ''
        const formData = {
            'imageLogo' : imageLogo,
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

    return(
        <div className="text-xl">
            <p>Navbar: </p>
            <div className="px-10 mt-2">
                <div className="mb-2">                   
                    <p className="mb-3">Logo Image:</p>
                    <div className="h-auto p-5 w-full border-2 border-black rounded">
                        {imageLogo && ( <img src={imageLogo.preview} alt={imageLogo.name} width="50%"/>)}
                    </div>
                    <div className="flex justify-end">
                        <button className="relative flex items-center border-2 border-black rounded w-32 px-3 py-1 mt-2 overflow-hidden hover:bg-black hover:text-white">
                            <BiUpload className="mr-3"/> Upload
                            <input type="file" className="absolute bottom-0 left-0 opacity-0 -z-1" onChange={handlePreviewImageLogo}/>
                        </button>
                        <button onClick={handleApi} className="w-32 flex items-center justify-center text-white bg-[#a7705c] mt-2 rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button>
                    </div>
                </div>
            </div>
        </div>
                
    )
}

export default NavContent