import React from "react";
import "./Myself.css";
import { Container, Grid } from "@mui/material";
import image from "./me.png";
import Footer from "../Footer/Footer"
import WhatsAppIcon from "../Whatsapp/Whatsapp";
import SocialWidget from "../Social/Social";
const Myself = () => {
  return (
    <>
      <div className="myselfouter">
        
        <Container>
        <div className="myself">
          <h1>About</h1>
        </div>
        <WhatsAppIcon/>
        <SocialWidget/>
          <Grid container justifyContent="space-between">
            <Grid item xs={12}  md={6} order={{ xs: 2, md: 1 }}>
              <div className="myselftext">
                <p>
                  Meet Hamza, a talented and passionate ReactJS developer with a
                  relentless thirst for knowledge and a drive to explore
                  cutting-edge technologies. Armed with a Bachelor's degree in
                  Computer Science, Hamza has honed their skills to
                  perfection, transforming their passion for coding into an art
                  form. From the very beginning of their journey, they have
                  embraced the art of ReactJS development, and their journey of
                  growth and learning has never halted. Always eager to broaden
                  their horizons, Hamza embarks on a continuous quest to
                  discover and experience the latest advancements in the tech
                  world. With an insatiable appetite for challenges and an
                  unwavering commitment to excellence, Hamza stands ready
                  to leave an indelible mark in the realm of technology.<br></br>
                  <span className="city">Lahore,Pakistan</span>
                </p>
                
              </div>
            </Grid>
            <Grid item xs={8} md={4} margin="auto" order={{ xs: 1, md: 2}}>
              <div className="mypicture">
                <img src={image} alt="" />
              </div>
            </Grid>
          </Grid>
        </Container>
        <Footer/>
      </div>
    </>
  );
};

export default Myself;
