import { BiUpload, BiCheck } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateAlbum = () => {
    const [thumbImg, setThumbImg] = useState();
  const [nameThumb, setNameThumb] = useState();

  const handlePreviewImageThumb = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setThumbImg(file);
    console.log(file);
  };
  useEffect(() => {
    document.title = "Navigation";
  });

  useEffect(() => {
    return () => {
      thumbImg && URL.revokeObjectURL(thumbImg.preview);
    };
  }, [thumbImg]);

  const handleApi = async (e) => {
    e.preventDefault();
    //call api
    const url = "";
    const formData = {
      
    };
    console.log(formData);
    axios
      .post(url, formData)
      .then((res) => {
        console.log(res.data);
        alert("success");
      })
      .catch((err) => {
        alert("service error");
        console.log(err);
      });
  };
    return (
        <div className="text-xl">
            <p>Navbar: </p>
            <div className="mt-2 px-10">
                <div className="mb-2">
                <p className="mb-3">Logo Image:</p>
                <div className="h-auto w-full rounded border-2 border-black p-5">
                    {thumbImg && <img src="" alt="" width="50%" />}
                </div>
                <p className="mb-3">Name Image:</p>
                <input
                    className="h-auto w-full py-1 outline-none"
                    placeholder=" "
                    value={nameThumb}
                    onChange={(event) => {
                    setNameThumb(event.target.value);
                    }}
                    type="text"
                    maxLength={100}
                />
                <div className="flex justify-end">
                    <button className="relative mt-2 flex w-32 items-center overflow-hidden rounded border-2 border-black px-3 py-1 hover:bg-black hover:text-white">
                    <BiUpload className="mr-3" /> Upload
                    <input
                        type="file"
                        className="-z-1 absolute bottom-0 left-0 opacity-0"
                        onChange={handlePreviewImageThumb}
                    />
                    </button>
                    <button
                    onClick={handleApi}
                    className="mt-2 ml-5 flex w-32 items-center justify-center rounded border-[#a7705c] bg-[#a7705c] text-white hover:border-2 hover:bg-white hover:text-[#a7705c] "
                    >
                    <BiCheck className="mr-1 text-2xl" /> Save{" "}
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAlbum