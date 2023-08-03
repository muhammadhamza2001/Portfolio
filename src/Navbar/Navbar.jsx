import React, { useState } from 'react';
import { Navbar, Nav, Form, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {BiCollapseAlt} from "react-icons/bi"
import {FaBars} from "react-icons/fa"
import logo from "./small.png";
import './Navbar.css';

const Appbar = () => {
  const [isNavExpanded, setNavExpanded] = useState(false);

  const handleToggle = () => {
    setNavExpanded(!isNavExpanded);
  };

  return (
    <Navbar expand="lg" className='navb py-0' expanded={isNavExpanded} onToggle={handleToggle}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className='logo'>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" onClick={handleToggle}>
          {isNavExpanded ? <BiCollapseAlt className='iconsnav' /> : <FaBars className='iconsnav' />}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto side">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" exact className='links'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/about" className='links'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/skills" className='links'>Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/projects" className='links'>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/certification" className='links'>Certifications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contact" className='links'>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            {/* Add any form elements here if needed */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
