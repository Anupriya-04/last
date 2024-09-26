import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import '../../Css_Folder/navbaar.css';

const Navbarr = () => {
  // State to manage navbar toggle
  const [expanded, setExpanded] = useState(false);

  // Function to handle link click
  const handleLinkClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };

  return (
    <Navbar
      sticky="top"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)} // Toggle the navbar when the toggle button is clicked
      className="bg-body-tertiary"
      style={{
        backgroundColor: '#CCCCFF',
        backgroundImage: 'linear-gradient(315deg,  #ADD8E6 0%, #CCCCFF 74%)',
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingLeft: '20px',
        position: 'fixed', // Ensure navbar stays fixed
        top: 0, // Align to the top
        width: '100%', // Full width
        zIndex: 1000, // Ensure it stays on top of other content
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/SRPMLOGO.png"
            alt=""
            height="50px"
            style={{ borderRadius: '100%' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" style={navLinkStyle} onClick={handleLinkClick}>
              HOME
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/about" style={navLinkStyle} onClick={handleLinkClick}>
              ABOUT
            </Nav.Link> */}
            <NavDropdown title="ABOUT" id="basic-nav-dropdown" style={navdropstyle}>
              <NavDropdown.Item as={NavLink} to="/about" style={dropdownItemStyle} onClick={handleLinkClick}>
               About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/people" style={dropdownItemStyle} onClick={handleLinkClick}>
              People Behind Smile
              </NavDropdown.Item>
              </NavDropdown>
            <NavDropdown title="OUR WORKS" id="basic-nav-dropdown" style={navdropstyle}>
              <NavDropdown.Item as={NavLink} to="/education" style={dropdownItemStyle} onClick={handleLinkClick}>
                Education
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/livelihood" style={dropdownItemStyle} onClick={handleLinkClick}>
                Livelihood
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/healthcare" style={dropdownItemStyle} onClick={handleLinkClick}>
                Health Care
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/women" style={dropdownItemStyle} onClick={handleLinkClick}>
                Women Empowerment
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/awarecamp" style={dropdownItemStyle} onClick={handleLinkClick}>
                Awareness Camp
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/environment" style={dropdownItemStyle} onClick={handleLinkClick}>
                Environment
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/awareness" style={navLinkStyle} onClick={handleLinkClick}>
              AWARENESS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/finishedWork" style={navLinkStyle} onClick={handleLinkClick}>
              FINISHED WORK
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" style={navLinkStyle} onClick={handleLinkClick}>
              CONTACT US
            </Nav.Link>
            <Nav.Link as={NavLink} to="/student" style={navLinkStyle} onClick={handleLinkClick}>
              STUDENT ATTENDANCE
            </Nav.Link>
          </Nav>
          <NavDropdown title="SKILL DEVELOPMENT" id="basic-nav-dropdown1" style={navdropstyle}>
              <NavDropdown.Item as={NavLink} to="/empenalment" style={dropdownItemStyle} onClick={handleLinkClick}>
               Empenalment
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/oldage" style={dropdownItemStyle} onClick={handleLinkClick}>
              Old Age Homes
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/centers" style={dropdownItemStyle} onClick={handleLinkClick}>
              Our Center
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/assessment" style={dropdownItemStyle} onClick={handleLinkClick}>
              Assessment Work
              </NavDropdown.Item>
              </NavDropdown>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Quicksand, sans-serif',
  fontWeight: 'bold',
  fontSize: '18px',
  padding: '15px',
};

const navdropstyle = {
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Quicksand, sans-serif',
  fontWeight: 'bold',
  fontSize: '18px',
  padding: '7px',
};

const dropdownItemStyle = {
  color: 'Grey',
  textDecoration: 'none',
  fontFamily: "'Quicksand', sans-serif",
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '5px 50px',
};

export default Navbarr;
