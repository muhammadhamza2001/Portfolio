import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Container, Grid } from "@mui/material";
import SocialWidget from "../Social/Social";
import Footer from "../Footer/Footer";
import "./Home.css";
import WhatsAppIcon from "../Whatsapp/Whatsapp";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {  BiLogoGmail } from "react-icons/bi";
import file from "../Home/resume.pdf"
const Home = () => {

  const handleDownloadClick = () => {
    
    const fileUrl = file;

    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'hamza_resume';
    link.click();
  };
  return (
    <>
      <div className="herobg">
        <WhatsAppIcon />
        <Container className="typing">
          <div className="myname">
            <h1>MUHAMMAD HAMZA</h1>
          </div>
          <SocialWidget />

          <TypeAnimation
            sequence={[
              `I'm a Web Developer`,
              1000,
              "Project Manager",
              1000,
              `I'm a ReactJS Developer`,
              1000,
            ]}
            wrapper="span"
            speed={10}
            className="write"
            style={{
              fontSize: "2em",
              display: "inline-block",
              fontWeight: "600",
              color: "white",
            }}
            repeat={Infinity}
          />
          <div className="resume">
            <button onClick={handleDownloadClick}>Resume</button>
          </div>
        
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Home;
