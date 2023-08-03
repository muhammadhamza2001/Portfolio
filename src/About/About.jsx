import React from "react";
import "./About.css";
import { Container, Grid } from "@mui/material";
import Footer from "../Footer/Footer";
import SocialWidget from "../Social/Social";
import image from "./html (2).png"
import image2 from "./css.png"
import image3 from "./bootstrap.png"
import image4 from "./js.png"
import image5 from "./react.png"
import image6 from "./ps.png"
import image7 from "./jquery.png"
import image8 from "./vs.png"
import image9 from "./slack.png"
import WhatsAppIcon from '../Whatsapp/Whatsapp';
import image10 from "./mui.png"
const About = () => {
  return (
    <>
      <section className="skillbg">
      <WhatsAppIcon/>
        <Container>
          <div className="heading">
            <h1>MY SKILLS</h1>
            <p>
              I love to learn new things and experiment with new technologies.
            </p>
            <p>
              These are some of the major languages, technologies, tools and
              platforms I have worked with:
            </p>
          </div>
          <SocialWidget />
          <Grid container className="techouter" justifyContent="center" spacing={3}>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image} alt="" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image2} alt="" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image6} alt="" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image4} alt="" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image5} alt="" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image3} alt="" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image7} alt="" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image8} alt="" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image9} alt="" />
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <div className="tech">
                <img src={image10} alt="" />
              </div>
            </Grid>
          </Grid>
          
        </Container>
        
      </section>
      <Footer />
    </>
  );
};

export default About;
