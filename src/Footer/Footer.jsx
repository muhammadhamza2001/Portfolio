import React from "react";
import "./Footer.css";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="outer-container">
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()}<a className="brand" href="https://www.linkedin.com/in/muhammad-hamza-ckt/">MHZ</a> All rights reserved.</p>
        <div className="socialaccount">
          <a href="https://www.linkedin.com/in/muhammad-hamza-ckt/" target='./'>
            <FaLinkedinIn className="iconn" />
          </a>
          <a href="https://github.com/muhammadhamza2001" target='./'>
            {" "}
            <FaGithub className="iconn" />
          </a>
          <a href="mailto: muhammadhamzackt@gmail.com" target='./'>
            <BiLogoGmail className="iconn" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
