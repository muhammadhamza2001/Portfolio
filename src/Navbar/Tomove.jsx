import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Appbar from './Navbar';
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Myself from '../Myself/Myself';
import Website from '../Website/Website';
import Certificate from '../Certificate/Certificate';
const Tomove = () => {
  return (
    <Router>
      <div>
        <Appbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/skills" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<Myself/>} />
          <Route path="/projects" element={<Website/>} />
          <Route path="/certification" element={<Certificate/>} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default Tomove;
