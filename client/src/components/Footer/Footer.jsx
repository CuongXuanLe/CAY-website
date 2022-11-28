import React from "react";
import "./footer.css";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    // footer section starts
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>CAY studio</h3>
          <p>2022 All rights reserved Development by CAY studio</p>
        </div>

        <div className="box">
          <p>46/10A Dung Si Thanh Khe St.</p>
          <p>Thanh Khe Tay, Da Nang 550000</p>
        </div>

        <div className="box">
          <p>+84 (0) 7 6666 0952</p>
          <p>caystudio.contact@gmail.com</p>
        </div>

        <div className="box">
          <div className="social_links">
            <CiFacebook className="icons" />
            <CiInstagram className="icons" />
            <CiLinkedin className="icons" />
          </div>
        </div>
      </div>
    </section>

    // footer section ends
  );
};

export default Footer;
