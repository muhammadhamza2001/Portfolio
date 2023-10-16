import React from 'react';
import './Social.css';
import {  FaGithub, FaLinkedinIn } from "react-icons/fa";
import {  BiLogoGmail } from "react-icons/bi";
const SocialWidget = () => {
  return (
    <div className="social-widget">
      
      <a href="https://www.linkedin.com/in/muhammad-hamza-ckt/" target='_self'><FaLinkedinIn className="icon" /></a>
      <a href="https://github.com/muhammadhamza2001" target='_self'> <FaGithub className="icon"/></a>
      <a href="mailto: muhammadhamzackt@gmail.com"><BiLogoGmail className="icon" /></a>
    </div>
  );
};

export default SocialWidget;
