import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BiCollapseAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import logo from "./small.png";
import './Navbar.css';

const Appbar = () => {
  const [isNavExpanded, setNavExpanded] = useState(false);

  const handleToggle = () => {
    setNavExpanded(!isNavExpanded);
  };

  const closeNavbar = () => {
    if (isNavExpanded) {
      setNavExpanded(false);
    }
  };

  return (
    <Navbar expand="lg" className='navb py-0' expanded={isNavExpanded} onToggle={handleToggle}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className='logo'>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" onClick={handleToggle}>
          {isNavExpanded ? <BiCollapseAlt className='iconsnav' onClick={closeNavbar} /> : <FaBars className='iconsnav' />}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto side">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" exact className='links' onClick={closeNavbar}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/about" className='links' onClick={closeNavbar}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/skills" className='links' onClick={closeNavbar}>Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/projects" className='links' onClick={closeNavbar}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/certification" className='links' onClick={closeNavbar}>Certifications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contact" className='links' onClick={closeNavbar}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
