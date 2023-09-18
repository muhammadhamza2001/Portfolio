import { Container, Grid } from '@mui/material'
import React from 'react'
import meta from "./meta.jpeg"
import "./Certificate.css"
import Footer from '../Footer/Footer'
import {BiLinkExternal} from "react-icons/bi"
const Certificate = () => {
  return (
    <>
    <div className="certificatebg">
        <Container>
        <div className="larger">
                    <h1>My Certifications</h1>
                </div>
            <Grid container>
                
                <Grid item sm={12} md={8} margin="auto">
                <h2 className='textcert'>certificate of Meta of Introduction to Frontend Developer from Coursera</h2>
                <div className="proof">
                    <a href="https://www.coursera.org/account/accomplishments/verify/FJQ7MZ4LGWG7" target='./'><BiLinkExternal/></a>
                </div>
                    <div className="meta">
                        <img src={meta} alt="" />
                    </div>
                </Grid>
            </Grid>
        </Container>
        
        </div>
        <Footer/>
    </>
  )
}

export default Certificate