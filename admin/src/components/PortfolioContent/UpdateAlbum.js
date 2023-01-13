import { BsPencil } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { BiUpload, BiCheck } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const UpdateAlbum = () => {
  const [name_album, setNameAlbum] = useState();
  const [category, setCategory] = useState();
  const [thumbnails, setThumbnails] = useState();
  // const [thumbImg, setThumbImg] = useState();
  // const [nameThumb, setNameThumb] = useState();
  const [listImg, setListImg] = useState([]);
  const location = useLocation();
  console.log(useLocation);
  const path = location.pathname.split("/");
  const [posts, setPosts] = useState([{}]);

  // const handlePreviewImageThumb = (e) => {
  //   const file = e.target.files[0];
  //   file.preview = URL.createObjectURL(file);
  //   setThumbImg(file);
  //   console.log(file);
  // };

  // const handlePreviewListImg = (e) => {
  //   // const file = e.target.files[0];
  //   // file.preview = URL.createObjectURL(file);
  //   // setListImg(file);
  //   // console.log(file);
  //   // console.log(e.target.files)
  //   if(e.target.files){
  //     const fileArray = Array.from(e.target.files).map((file)=> URL.createObjectURL(file));
  //     console.log(fileArray);
  //     setListImg((prevImages) => prevImages.concat(fileArray))
  //     Array.from(e.target.files).map(
  //       (file) => URL.revokeObjectURL(file)
  //     );
  //   }
  // };

  // const renderPhotos = (source) => {
  //   console.log("source: ", source);
  //   return source.map((photo) => {
  //     return <img src={photo} key={photo} width="50%" className="mr-2" alt="" />
  //   });
  // };
  useEffect(() => {
    const getPost = async () => {
      console.log(path[3]);
      const res = await axios.get("http://127.0.0.1:8000/api/edit/" + path[3]);
      setPosts(res.data);
      console.log(res.data);
    };
    getPost();
  }, []);
  useEffect(() => {
    document.title = "Create album";
    return () => {
      thumbnails && URL.revokeObjectURL(thumbnails.preview);
      // listImg && URL.revokeObjectURL(listImg.preview);
    };
  }, [thumbnails]);

  const handleApi = async (e) => {
    e.preventDefault();
    //call api
    const url = "http://127.0.0.1:8000/api/update/" + path[3];
    const formData = {
      name_album: name_album,
      category: category,
      thumbnails: thumbnails,
      image: listImg,
    };
    console.log(formData);
    axios
      .put(url, formData)
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
      <p>Update album: </p>
      <div className="mt-2 px-10">
        <div className="mb-3">
          <p className="mb-3">Name album:</p>
          <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
            <input
              className="h-auto w-full py-1 outline-none border-none"
              placeholder="The first name of the album"
              type="text"
              value={name_album || ""}
              onChange={(event) => {
                setNameAlbum(event.target.value);
              }}
              maxLength={200}
            />
            <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
              <BsPencil />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-3">Category:</p>
          <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
            <input
              className="h-auto w-full py-1 outline-none border-none"
              placeholder="Flower"
              type="text"
              value={category || ""}
              onChange={(event) => setCategory(event.target.value)}
              maxLength={200}
            />
            <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
              <BsPencil />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-3">Thumbnails</p>
          <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
            <input
              className="h-auto w-full py-1 outline-none border-none"
              placeholder="Thumbnails"
              type="text"
              value={thumbnails || ""}
              onChange={(event) => setThumbnails(event.target.value)}
              maxLength={200}
            />
            <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
              <BsPencil />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-3">List Image:</p>
          <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
            <input
              className="h-auto w-full py-1 outline-none border-none"
              placeholder="List Image"
              type="text"
              value={listImg || ""}
              onChange={(event) => setListImg(event.target.value)}
              maxLength={200}
            />
            <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
              <BsPencil />
            </button>
          </div>
        </div>

        {/* <div className="mb-3">
          <p className="mb-3">Thumbnail:</p>
          <div className="h-auto w-full rounded border-2 border-black p-5">
            {thumbImg && (
              <img src={thumbImg.preview} alt={thumbImg.name} width="50%" />
            )} */}
        {/* <img
              value={thumbImg || ""}
              onChange={(event) => getImgQR(event.target.value)}
              src={guideDetail.qr_image}
              alt="QR_img"
              width="50%"
            /> */}
        {/* </div>
          <div className="flex justify-end">
            <button className="relative mt-2 flex w-32 items-center overflow-hidden rounded border-2 border-black px-3 py-1 hover:bg-black hover:text-white">
              <BiUpload className="mr-3" /> Upload
              <input
                type="file"
                className="-z-1 absolute bottom-0 left-0 opacity-0"
                onChange={handlePreviewImageThumb}
              />
            </button> */}
        {/* <button onClick={handleApi} className="w-32 flex items-center justify-center text-white bg-[#a7705c] mt-2 rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button> */}
        {/* </div>
        </div> */}
        <div className="mb-3">
          {/* <p className="mb-3">List Images:</p>
          <div className="h-auto w-full overflow-y-auto rounded border-2 border-black p-5"> */}
          {/* {listImg && (<img src={listImg.preview} alt={listImg.name} width="50%"/>)} */}
          {/* <div className="flex snap-center">{renderPhotos(listImg)}</div> */}
          {/* <img
              value={thumbImg || ""}
              onChange={(event) => getImgQR(event.target.value)}
              src={guideDetail.qr_image}
              alt="QR_img"
              width="50%"
            /> */}
          {/* </div>
          <div className="flex justify-end">
            <button className="relative mt-2 flex w-32 items-center overflow-hidden rounded border-2 border-black px-3 py-1 hover:bg-black hover:text-white">
              <BiUpload className="mr-3" /> Upload
              <input
                type="file"
                multiple
                className="-z-1 absolute bottom-0 left-0 opacity-0"
                onChange={handlePreviewListImg}
              />
            </button>
          </div> */}
          {/* <button onClick={handleApi} className="flex items-center float-right px-10 py-2 justify-center text-white bg-[#a7705c] mt-6 rounded hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Update </button> */}
          <div className="mt-10 flex flex-row justify-end">
            <Link to="/AdminPortfolio">
              <button className="flex h-10 w-48 items-center justify-center rounded border-black bg-gray-300 hover:border-2 hover:bg-black hover:text-white ">
                {" "}
                Cancel{" "}
              </button>
            </Link>
            <Link to="/AdminPortfolio">
              <button
                onClick={handleApi}
                className="ml-5 flex h-10 w-48 items-center justify-center rounded border-[#a7705c] bg-[#a7705c] text-white hover:border-2 hover:bg-white hover:text-[#a7705c] "
              >
                <BiCheck className="mr-1 text-2xl" /> Save{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAlbum;
