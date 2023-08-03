import React, { useState, useRef } from "react";
import { Container, Grid } from "@mui/material";
import "./Contact.css";
import Footer from "../Footer/Footer";
import SocialWidget from "../Social/Social";
import WhatsAppIcon from '../Whatsapp/Whatsapp';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true); // Start loading
    emailjs.sendForm('service_xoadsbh', 'template_uxiu8wo', form.current, '8qj3ox6G6FXIDaHoK')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true); 
        setName(""); 
        setEmail("");
        setMessage("");
        setLoading(false); 

        
        setTimeout(() => {
          setSubmitted(false);
        }, 10000);
      })
      .catch((error) => {
        console.log(error.text);
        setSubmitted(false); 
        setLoading(false); 
      });
  };

  return (
    <>
      <section className="contactbg">
        <WhatsAppIcon />
        <Container>
          <SocialWidget />
          <h2 className="heading">CONTACT</h2>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <div className="formouter">
                <form ref={form} onSubmit={sendEmail}>
                  <div>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      name="user_name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      name="user_Email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Message"
                      name="message"
                    />
                  </div>
                  <div className="formbtn">
                    <button type="submit" disabled={loading}>
                      {loading ? "..." : submitted ? "Submitted" : "Submit"}
                    </button>
                  </div>
                </form>
                {submitted && <p className="submitalert">Thank you for taking the time to submit the form, I'll be reaching out to you very soon In Sha Allah</p>}
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Form;
