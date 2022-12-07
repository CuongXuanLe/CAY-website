import React, {useState, useEffect} from 'react';
import { BiCheck } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import axios from 'axios';

const FooterContent = () => {

    const [nameStudio, setNameStudio] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [addressEmail, setAddressEmail] = useState();

    useEffect(() => {
        document.title = "Footer"
    })

    const handleApi = async (e) => {
        e.preventDefault();

        //call api
        const url = ''
        const formData = {
            "nameStudio": nameStudio,
            "address": address,
            "phone": phone,
            "addressEmail": addressEmail,
        }
        console.log(formData);
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
            <div className="mb-3">
                <p className="mb-3">Name studio: </p>
                <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                    <input className="h-auto py-1 w-full outline-none" placeholder="CAY studio" value={nameStudio} onChange={(event) => {setNameStudio(event.target.value)}} type="text" maxLength={100}/>
                    <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                        <BsPencil/>
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <p className="mb-3">Address: </p>
                <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                    <input className="h-auto py-1 w-full outline-none" placeholder="46/10A Dung Si Thanh Khe St." value={address} onChange={(event) => {setAddress(event.target.value)}} type="text" maxLength={100}/>
                    <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                        <BsPencil/>
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <p className="mb-3">Phone number:</p>
                <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                    <input className="h-auto py-1 w-full outline-none" placeholder="+84 (0) 7 6666 0952" value={phone} onChange={(event) => {setPhone(event.target.value)}} type="text" maxLength={100}/>
                    <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                        <BsPencil/>
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <p className="mb-3">Email:</p>
                <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
                    <input className="h-auto py-1 w-full outline-none" placeholder="caystudio.contact@gmail.com" value={addressEmail} onChange={(event) => {setAddressEmail(event.target.value)}} type="email" required maxLength={100}/>
                    <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
                        <BsPencil/>
                    </button>
                </div>
            </div>

            <div className="flex flex-row justify-end mt-10">
                <button className="w-48 h-10 flex items-center justify-center bg-gray-300 rounded hover:bg-black hover:text-white hover:border-2 border-black "> Cancel </button>
                <button onClick={handleApi} className="w-48 h-10 flex items-center justify-center text-white bg-[#a7705c] rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button>
            </div>
        </div>
    )
}

export default FooterContent