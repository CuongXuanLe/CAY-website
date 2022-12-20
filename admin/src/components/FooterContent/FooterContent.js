import React, { useState } from "react";
import { useEffect } from "react";
import { BiCheck } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import axios from "axios";

const FooterContent = () => {
  const [posts, setPosts] = useState([]);

  const [nameStudio, setNameStudio] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [addressEmail, setAddressEmail] = useState();
  const [facebook, setFacebook] = useState();
  const [instagram, setInstagram] = useState();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/show-footer"); // id set cứng nha mọi người vì chỉ có 1 footer
      setPosts(res.data);
      console.log(res.data);
    };
    getPost();
    handleApi();
  }, []);

  const handleApi = async (e) => {
    e.preventDefault();

    //call api
    const url = "http://127.0.0.1:8000/api/patch-footer/1"; // id set cứng nha mọi người vì chỉ có 1 footer
    const formData = {
      name: nameStudio,
      address: address,
      phone_number: phone,
      email: addressEmail,
      facebook: facebook,
      instagram: instagram,
    };
    console.log(formData);
    axios
      .patch(url, formData)
      .then((res) => {
        console.log(res.data);
        alert("success");
      })
      .catch((err) => {
        alert("service error");
        console.log(err);
      });
    // window.location.reload(false);
  };

  return (
    <div className="text-xl">
      <div className="mb-3">
        <p className="mb-3">Name studio: </p>
        <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
          <input
            className="h-auto w-full py-1 outline-none"
            placeholder={posts.name}
            value={nameStudio || ""}
            onChange={(event) => {
              setNameStudio(event.target.value);
            }}
            type="text"
            maxLength={100}
          />
          <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
            <BsPencil />
          </button>
        </div>
      </div>
      <div className="mb-3">
        <p className="mb-3">Address: </p>
        <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
          <input
            className="h-auto w-full py-1 outline-none"
            placeholder={posts.address}
            value={address || ""}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            type="text"
            maxLength={100}
          />
          <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
            <BsPencil />
          </button>
        </div>
      </div>
      <div className="mb-3">
        <p className="mb-3">Phone number:</p>
        <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
          <input
            className="h-auto w-full py-1 outline-none"
            placeholder={posts.phone_number}
            value={phone || ""}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            type="text"
            maxLength={100}
          />
          <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
            <BsPencil />
          </button>
        </div>
      </div>
      <div className="mb-3">
        <p className="mb-3">Email:</p>
        <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
          <input
            className="h-auto w-full py-1 outline-none"
            placeholder={posts.email}
            value={addressEmail || ""}
            onChange={(event) => {
              setAddressEmail(event.target.value);
            }}
            type="email"
            required
            maxLength={100}
          />
          <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
            <BsPencil />
          </button>
        </div>
      </div>

      <div className="mb-3">
        <p className="mb-3">Facebook:</p>
        <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
          <input
            className="h-auto py-1 w-full outline-none"
            placeholder={posts.facebook}
            value={facebook || ''}
            onChange={(event) => {
              setFacebook(event.target.value);
            }}
            type="text"
            required
            maxLength={100}
          />
          <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
            <BsPencil />
          </button>
        </div>
      </div>

      <div className="mb-3">
        <p className="mb-3">Instagram:</p>
        <div className="flex flex-row items-center justify-between border-2 border-black w-full px-2 py-1 rounded">
          <input
            className="h-auto py-1 w-full outline-none"
            placeholder={posts.instagram}
            value={instagram || ''}
            onChange={(event) => {
              setInstagram(event.target.value);
            }}
            type="text"
            required
            maxLength={100}
          />
          <button className="hover:bg-[#a7705c] hover:text-white p-2 rounded">
            <BsPencil />
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-end mt-10">
        <button className="w-48 h-10 flex items-center justify-center bg-gray-300 rounded hover:bg-black hover:text-white hover:border-2 border-black ">
          {" "}
          Cancel{" "}
        </button>
        <button
          onClick={handleApi}
          className="ml-5 flex h-10 w-48 items-center justify-center rounded border-[#a7705c] bg-[#a7705c] text-white hover:border-2 hover:bg-white hover:text-[#a7705c] "
        >
          <BiCheck className="mr-1 text-2xl" /> Save{" "}
        </button>
      </div>
    </div>
  );
};

export default FooterContent;
