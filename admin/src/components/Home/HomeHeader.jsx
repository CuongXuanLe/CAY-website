import React, { useState, useEffect } from "react";
import { BiCheck } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

import axios from "axios";

const HomeContent = () => {
  const [background1, setBackground1] = useState();
  const [background2, setBackground2] = useState();
  const [imgAbout, setImgAbout] = useState();
  const [title1, setTitle1] = useState();
  const [description2, setDescription2] = useState();
  const [subtitle1, setSubtitle1] = useState();
  const [description1, setDescription1] = useState();
  const [descriptionAbout, setDescriptionAbout] = useState();

  useEffect(() => {
    document.title = "Home Admin";
  });

  // useEffect(() => {
  //   return () => {
  //     imageBackground && URL.revokeObjectURL(imageBackground.preview);
  //   };
  // }, [imageBackground]);

  // const handlePreviewImageBody = (e) => {
  //   const file = e.target.files[0];

  //   file.preview = URL.createObjectURL(file);

  //   setImageBody(file);
  // };

  // useEffect(() => { const handlePreviewImage = (e) => {
  //   const file = e.target.files[0];

  //   file.preview = URL.createObjectURL(file);

  //   setImageBackground(file);
  // };

  //   return () => {
  //     imageBody && URL.revokeObjectURL(imageBody.preview);
  //   };
  // }, [imageBody]);

  // const handlePreviewImageAboutUs = (e) => {
  //   const file = e.target.files[0];

  //   file.preview = URL.createObjectURL(file);

  //   setImageAboutUs(file);
  // };

  // useEffect(() => {
  //   return () => {
  //     imageAboutUs && URL.revokeObjectURL(imageAboutUs.preview);
  //   };
  // }, [imageAboutUs]);

  const handleApi = async (e) => {
    e.preventDefault();

    //call api
    const url = "http://127.0.0.1:8000/api/patch-home/2";
    const formData = {
      title1: title1,
      description1: description1,
      subtitle1: subtitle1,
      background1: background1,
      description2: description2,
      background2: background2,
      imgAbout: imgAbout,
      descriptionAbout: descriptionAbout,
    };
    console.log(formData);
    await axios
      .patch(url, formData)
      .then((res) => {
        console.log(res.data);
        alert("success");
      })
      .catch((err) => {
        alert("service error");
        console.log(err);
      });
  };

  //getAPI
  const [homedatas, setHomedatas] = useState([]);
  const homeAPI = "http://127.0.0.1:8000/api/get-home";
  useEffect(() => {
    async function getHomeData() {
      const res = await axios.get(homeAPI);
      setHomedatas(res.data.data);
      // console.log(res.data.data)
    }
    getHomeData();
  }, []);

  return (
    <div className="text-xl">
      <p>Home header section: </p>
      <div className="mt-2 px-10">
        <div className="mb-2">
          <p className="mb-3">Background Image:</p>
          {/* <div className="h-auto w-full rounded border-2 border-black p-5">
            {imageBackground && (
              <img
                src={imageBackground.preview}
                alt={imageBackground.name}
                width="50%"
              />
            )}
          </div>
          <div className="flex justify-end">
            <button className="relative mt-2 flex w-32 items-center overflow-hidden rounded border-2 border-black px-3 py-1 hover:bg-black hover:text-white">
              <BiUpload className="mr-3" /> Upload
              <input
                type="file"
                className="-z-1 absolute bottom-0 left-0 opacity-0"
                onChange={handlePreviewImage}
              />
            </button>
          </div> */}
          <div className="my-2 flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
            {homedatas.map((homedata) => (
              <input
                key={homedata.id}
                className="h-auto w-full py-1 outline-none border-none"
                value={background1}
                onChange={(event) => {
                  setBackground1(event.target.value);
                }}
                placeholder={homedata.background1}
                type="text"
                maxLength={200}
              />
            ))}
            <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
              <BsPencil />
            </button>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex items-center justify-between">
            <div className="w-5/12">
              <p className="mb-3">Title: </p>
              <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
                {homedatas.map((homedata) => (
                  <input
                    key={homedata.id}
                    className="h-auto w-full py-1 border-none outline-none"
                    value={title1}
                    onChange={(event) => {
                      setTitle1(event.target.value);
                    }}
                    placeholder={homedata.title1}
                    type="text"
                    maxLength={200}
                  />
                ))}
                <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
                  <BsPencil />
                </button>
              </div>
            </div>
            <div className="w-10 mt-10 border-b-2 border-black"></div>
            <div className="w-5/12 ">
              <p className="mb-3">Subtitle:</p>
              <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
                {homedatas.map((homedata) => (
                  <input
                    key={homedata.id}
                    className="h-auto w-full py-1 outline-none border-none"
                    placeholder={homedata.subtitle1}
                    value={subtitle1}
                    onChange={(event) => {
                      setSubtitle1(event.target.value);
                    }}
                    type="text"
                    maxLength={100}
                  />
                ))}

                <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
                  <BsPencil />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <p className="mb-3">Description: </p>
          {homedatas.map((homedata) => (
            <textarea
              key={homedata.id}
              rows="4"
              cols="50"
              placeholder={homedata.description1}
              value={description1}
              onChange={(event) => {
                setDescription1(event.target.value);
              }}
              className="w-full rounded border-2 border-black p-2"
            ></textarea>
          ))}
        </div>
      </div>

      <p>Portfolio & Blog section: </p>
      <div className="mt-2 px-10">
        <div className="mb-2">
          <p className="mb-3">Background Image 2:</p>
          {/* <div className="h-auto w-full rounded border-2 border-black p-5">
            {imageBody && (
              <img src={imageBody.preview} alt={imageBody.name} width="50%" />
            )}
          </div>
          <div className="flex justify-end">
            <button className="relative mt-2 flex w-32 items-center overflow-hidden rounded border-2 border-black px-3 py-1 hover:bg-black hover:text-white">
              <BiUpload className="mr-3" /> Upload
              <input
                type="file"
                className="-z-1 absolute bottom-0 left-0 opacity-0"
                onChange={handlePreviewImageBody}
              />
            </button>
          </div> */}
          <div className="my-2 flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
            {homedatas.map((homedata) => (
              <input
                key={homedata.id}
                className="h-auto w-full py-1 border-none outline-none"
                value={background2}
                onChange={(event) => {
                  setBackground2(event.target.value);
                }}
                placeholder={homedata.background2}
                type="text"
                maxLength={200}
              />
            ))}
            <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
              <BsPencil />
            </button>
          </div>
          <p className="mb-3">Description2 </p>
          <div>
            {homedatas.map((homedata) => (
              <textarea
                key={homedata.id}
                className="w-full rounded border-2 border-black p-2"
                value={description2}
                onChange={(event) => {
                  setDescription2(event.target.value);
                }}
                placeholder={homedata.description2}
                type="text"
                maxLength={200}
                rows="4"
                cols="50"
              />
            ))}
          </div>
        </div>
      </div>

      <p className="capitalize">About us section: </p>
      <div className="mt-2 px-10">
        <div className="mb-2">
          <p className="mb-3">Background Image :</p>
          {/* <div className="h-auto w-full rounded border-2 border-black p-5">
            {imageAboutUs && (
              <img
                src={imageAboutUs.preview}
                alt={imageAboutUs.name}
                width="50%"
              />
            )}
          </div>
          <div className="flex justify-end">
            <button className="relative mt-2 flex w-32 items-center overflow-hidden rounded border-2 border-black px-3 py-1 hover:bg-black hover:text-white">
              <BiUpload className="mr-3" /> Upload
              <input
                type="file"
                className="-z-1 absolute bottom-0 left-0 opacity-0"
                onChange={handlePreviewImageAboutUs}
              />
            </button>
          </div> */}
          <div className="my-2 flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
            {homedatas.map((homedata) => (
              <input
                key={homedata.id}
                className="h-auto w-full py-1 outline-none border-none"
                value={imgAbout}
                onChange={(event) => {
                  setImgAbout(event.target.value);
                }}
                placeholder={homedata.imgAbout}
                type="text"
                maxLength={200}
              />
            ))}
            <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
              <BsPencil />
            </button>
          </div>
        </div>
        <div className="mb-2">
          <p className="mb-3">About us: </p>
          {homedatas.map((homedata) => (
            <textarea
              key={homedata.id}
              rows="4"
              cols="50"
              placeholder={homedata.descriptionAbout}
              value={descriptionAbout}
              onChange={(event) => {
                setDescriptionAbout(event.target.value);
              }}
              className="w-full rounded border-2 border-black p-2"
            ></textarea>
          ))}
        </div>
        <div className="mt-10 flex flex-row justify-end">
          <button className="flex h-10 w-48 items-center justify-center rounded border-black bg-gray-300 hover:border-2 hover:bg-black hover:text-white ">
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
    </div>
  );
};

export default HomeContent;
