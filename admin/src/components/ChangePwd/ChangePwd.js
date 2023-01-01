import { BiCheck } from "react-icons/bi";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

const ChangePwd = () => {
  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  useEffect(() => {
    document.title = "Change Password";
  });

  const handleApi = async (e) => {
    e.preventDefault();

    //call api
    const url = "http://127.0.0.1:8000/api/change-password/1"; // id set cứng nha mọi người vì chỉ có 1 footer
    const formData = {
      old_password: oldPassword,
      password: password,
      confirm_password: confirmPassword,
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
      <p>Change password: </p>
      <div className="mt-2 px-10">
        <div className="mb-3">
          <p className="mb-3">Current password </p>
          <div className="h-auto w-full rounded border-2 border-black py-1 px-2">
            <input
              className="h-auto w-full py-1"
              placeholder="Current password"
              value={oldPassword || ""}
              onChange={(event) => {
                setOldPassword(event.target.value);
              }}
              type="password"
              maxLength={200}
            />
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-3">Enter new password </p>
          <div className="h-auto w-full rounded border-2 border-black py-1 px-2">
          <input
            className="h-auto w-full py-1 "
            placeholder="Enter new password"
            value={password || ""}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            maxLength={200}
          />
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-3">Confirm password </p>
          <div className="h-auto w-full rounded border-2 border-black py-1 px-2">
            <input
              className="h-auto w-full py-1"
              placeholder="Confirm password"
              value={confirmPassword || ""}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              type="password"
              maxLength={200}
            />
          </div>
        </div>

        <div className="flex flex-row justify-end">
          <button className="flex h-10 w-32 items-center justify-center rounded border-black bg-gray-300 hover:border-2 hover:bg-black hover:text-white ">
            {" "}
            Cancel{" "}
          </button>
          <button
            onClick={handleApi}
            className="ml-5 flex h-10 w-32 items-center justify-center rounded border-[#a7705c] bg-[#a7705c] text-white hover:border-2 hover:bg-white hover:text-[#a7705c] "
          >
            <BiCheck className="mr-1 text-2xl" /> Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePwd;
