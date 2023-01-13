import React, { useEffect, useState } from "react";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import axios from "axios";

const Contact = () => {
  //Get API
  const [contacts, setContacts] = useState([]);
  const contactApi = "http://127.0.0.1:8000/api/get-footer";
  useEffect(() => {
    async function getContactData() {
      const res = await axios.get(contactApi);
      setContacts(res.data.data);
    }
    document.title = "Contact"
    getContactData();
  }, []);

  return (
    <React.Fragment>
      <div className="h-auto px-14 pt-28">
        <div className="mt-4 flex justify-between">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#952B2B] text-white hover:bg-[#c42929]">
              <BsTelephone />
            </div>
            {contacts &&
              contacts.map((contact, index) => (
                <p key={index}>{contact.phone_number}</p>
              ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#952B2B] text-white hover:bg-[#c42929]">
              <AiOutlineMail className="text-xl" />
            </div>
            {contacts &&
              contacts.map((contact, index) => (
                <p key={index}>{contact.email}</p>
              ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#952B2B] text-white hover:bg-[#c42929]">
              <FiFacebook className="text-xl" />
            </div>
            {contacts &&
              contacts.map((contact, index) => (
                <a key={index} href={contact.facebook}>
                  <p>{contact.facebook}</p>
                </a>
              ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#952B2B] text-white hover:bg-[#c42929]">
              <BsInstagram />
            </div>
            {contacts &&
              contacts.map((contact, index) => (
                <a href={contact.instagram} key={index}>
                  <p>{contact.instagram}</p>
                </a>
              ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8764301686892!2d108.17777941468424!3d16.071900888879373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ba558af929%3A0x1c7ba47c463bc9ab!2sCAY%20Studio!5e0!3m2!1svi!2s!4v1671527713454!5m2!1svi!2s"
            width="1410"
            height="450"
            title="Address CAY studio"
          ></iframe>
        </div>

        <div className="my-6">
          <span className="font-bold">Địa chỉ studio:</span>
          <p className="font-thin">
            46/10A Dũng Sĩ Thanh Khê, Thanh Khe Tay, Đà Nẵng
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
