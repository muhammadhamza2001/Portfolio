import React from 'react'
import "./Website.css"
import { Container, Grid } from '@mui/material'
import WhatsAppIcon from '../Whatsapp/Whatsapp'
import SocialWidget from '../Social/Social'
import Footer from "../Footer/Footer"
import {BiLinkExternal} from "react-icons/bi"
const Website = () => {
  return (
    <>
    <div className="webouter">
        <Container>
        <div className="web">
            <h1>My Portfolio</h1>
        </div>
        <WhatsAppIcon/>
        <SocialWidget/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                <div className="visit">
                        <a href="https://aesthetic-froyo-c0e1b7.netlify.app/" target='./'><span>Click here to visit</span><BiLinkExternal/></a>
                    </div>
                    <div className="website">
                    <iframe src="https://aesthetic-froyo-c0e1b7.netlify.app/" frameborder="0"></iframe>
                    </div>
                    
                </Grid>
                <Grid item xs={12} md={12}>
                <div className="visit">
                        <a href="https://car-ten-mu.vercel.app/" target='./'><span>Click here to visit</span><BiLinkExternal/></a>
                    </div>
                <div className="website">
                    <iframe src="https://car-ten-mu.vercel.app/" frameborder="0"></iframe>
                    </div>
                </Grid>
                
            </Grid>
        </Container>
        </div>
        <Footer/>
    </>
  )
}

export default Website