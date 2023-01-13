import React, { useState, useEffect } from "react";
import { BiUpload, BiCheck } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { ListItems, AddItem } from "../../components";
import axios from "axios";

const GuideContent = () => {
  const [addItem, setAddItem] = useState(false);

  const handleAddItem = () => {
    setAddItem(!addItem);
  };

  const [imageQR, setImageQR] = useState();

  const handlePreviewImageQR = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setImageQR(file);
  };

  useEffect(() => {
    return () => {
      imageQR && URL.revokeObjectURL(imageQR.preview);
    };
  }, [imageQR]);

  const [rentCost, getRentCost] = useState();
  const [depositCost, getDepositCost] = useState();
  const [depositInfo, getDepositInfo] = useState();
  const [imgQR, getImgQR] = useState();
  const [link, getLink] = useState();
  const [stuImg, getStuImg] = useState();

  useEffect(() => {
    document.title = "Guide Page";
  }, []);

  //get data from api
  const [guideDetails, getGuideDetails] = useState([]);
  const guideUrl = "http://127.0.0.1:8000/api/get-guide";

  useEffect(() => {
    async function getGuideData() {
      const res = await axios.get(guideUrl);
      getGuideDetails(res.data.data);
      // console.log(res.data.data)
    }
    getGuideData();
    getListTools();
  }, []);

  const updateGuide = async (e) => {
    e.preventDefault();
    //call api
    const url = "http://127.0.0.1:8000/api/patch-guide/1";
    const formData = {
      rent_cost: rentCost,
      deposit_cost: depositCost,
      deposit_information: depositInfo,
      qr_image: imgQR,
      link_fb: link,
      img_studio: stuImg,
    };
    console.log(formData);
    await axios
      .patch(url, formData)
      .then((res) => {
        console.log(res.data);
        alert("success");
      })
      .catch((err) => {
        console.log(err);
        alert("service error");
      });
    window.location.reload(false);
  };

  const [getItems, setGetItems] = useState([]);
  const url = "http://127.0.0.1:8000/api/get-items";
  const getListTools = async () => {
    const res = await axios.get(url).then(({ data }) => {
      setGetItems(data.data);
      // console.log(data)
    });
  };

  return (
    <>
      {guideDetails.length > 0 &&
        guideDetails.map((guideDetail) => (
          <div className="text-xl" key={guideDetail.id}>
            <p>Rental: </p>
            <div className="mt-2 px-10">
              <div className="mb-3">
                <p className="mb-3">Rent cost:</p>
                <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
                  <input
                    className="h-auto w-full py-1 outline-none border-none"
                    placeholder={guideDetail.rent_cost}
                    type="text"
                    value={rentCost || ""}
                    onChange={(event) => getRentCost(event.target.value)}
                    maxLength={200}
                  />
                  <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
                    <BsPencil />
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <p className="mb-3">Deposit price:</p>
                <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
                  <input
                    className="h-auto w-full py-1 outline-none border-none"
                    value={depositCost || ""}
                    onChange={(event) => getDepositCost(event.target.value)}
                    placeholder={guideDetail.deposit_cost}
                    type="text"
                    maxLength={200}
                  />
                  <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
                    <BsPencil />
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <p className="mb-3">Deposit information:</p>
                <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
                  <input
                    className="h-auto w-full py-1 outline-none border-none"
                    value={depositInfo || ""}
                    onChange={(event) => getDepositInfo(event.target.value)}
                    placeholder={guideDetail.deposit_information}
                    type="text"
                    maxLength={200}
                  />
                  <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
                    <BsPencil />
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <p className="mb-3">QR payment image(optional):</p>
                <div className="h-auto w-full rounded border-2 border-black p-5">
                  {/* {imageQR && ( 
                                <img src={imageQR.preview} alt={imageQR.name} width="50%"/>
                                )} */}
                  <img
                    value={imgQR || ""}
                    onChange={(event) => getImgQR(event.target.value)}
                    src={guideDetail.qr_image}
                    alt="QR_img"
                    width="50%"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="relative mt-2 flex w-32 items-center overflow-hidden rounded border-2 border-black px-3 py-1 hover:bg-black hover:text-white">
                    <BiUpload className="mr-3" /> Upload
                    <input
                      type="file"
                      className="-z-1 absolute bottom-0 left-0 opacity-0"
                      onChange={handlePreviewImageQR}
                    />
                  </button>
                  {/* <button onClick={handleApi} className="w-32 flex items-center justify-center text-white bg-[#a7705c] mt-2 rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button> */}
                </div>
              </div>
              <div className="mb-3">
                <p className="mb-3">Link:</p>
                <div className="flex items-center">
                  <p className="mr-5">FanPage: </p>
                  <div className="flex w-full flex-row items-center justify-between rounded border-2 border-black px-2 py-1">
                    <input
                      className="h-auto w-full py-1 outline-none border-none"
                      value={link || ""}
                      onChange={(event) => getLink(event.target.value)}
                      placeholder={guideDetail.link_fb}
                      maxLength={200}
                    />
                    <button className="rounded p-2 hover:bg-[#a7705c] hover:text-white">
                      <BsPencil />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p>Option: </p>
            <div className="mt-2 mb-10 px-10">
              {getItems.length > 0 &&
                getItems.map((getItem) => (
                  <ListItems
                    key={getItem.id}
                    tools={getItem.item}
                    index={getItem.id}
                  />
                ))}

              <div className="float-right">
                <button
                  onClick={() => setAddItem(true)}
                  className="flex w-32 flex-row items-center justify-around rounded bg-[#a7705c] px-2 py-1 text-white"
                >
                  <AiOutlinePlus />
                  <p>Add item</p>
                </button>
              </div>
              <AddItem onClose={handleAddItem} visible={addItem} />
            </div>
            <p>Facility: </p>
            <div className="mt-2 px-10">
              <div className="mb-2">
                <p className="mb-3">Studio space image:</p>
                <div className="h-auto w-full rounded border-2 border-black p-5">
                  {/* {imageQR && ( <img src={imageQR.preview} alt={imageQR.name} width="50%"/>)} */}
                  <img
                    value={stuImg || ""}
                    onChange={(event) => getStuImg(event.target.value)}
                    src={guideDetail.img_studio}
                    alt="studio_image"
                    width="50%"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="relative mt-2 flex w-32 items-center overflow-hidden rounded border-2 border-black px-3 py-1 hover:bg-black hover:text-white">
                    <BiUpload className="mr-3" /> Upload
                    <input
                      type="file"
                      className="-z-1 absolute bottom-0 left-0 opacity-0"
                      onChange={handlePreviewImageQR}
                    />
                  </button>
                  {/* <button onClick={handleApi} className="w-32 flex items-center justify-center text-white bg-[#a7705c] mt-2 rounded ml-5 hover:bg-white hover:text-[#a7705c] hover:border-2 border-[#a7705c] "><BiCheck className="mr-1 text-2xl"/> Save </button> */}
                </div>
              </div>
              <div className="mt-10 flex flex-row justify-end">
                <button className="flex h-10 w-48 items-center justify-center rounded border-black bg-gray-300 hover:border-2 hover:bg-black hover:text-white ">
                  {" "}
                  Cancel{" "}
                </button>
                <button
                  onClick={updateGuide}
                  className="ml-5 flex h-10 w-48 items-center justify-center rounded border-[#a7705c] bg-[#a7705c] text-white hover:border-2 hover:bg-white hover:text-[#a7705c] "
                >
                  <BiCheck className="mr-1 text-2xl" /> Save
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default GuideContent;
