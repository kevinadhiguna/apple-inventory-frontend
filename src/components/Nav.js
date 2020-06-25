import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (
    <div className="Nav">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img 
              src={require('../images/apple_logo.png')}
              alt="AppleLogo"
              className="Logo"
              />
            <Navbar.Brand href="/">Apple Inc. Inventory Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/stockevents">Stocks</Nav.Link>
                <Nav.Link href="/stockevents/add">Add Stocks</Nav.Link>
                <Nav.Link href="/upload">Upload</Nav.Link>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/credit">Credit</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://reactjs.org/">ReactJS</NavDropdown.Item>
                  <NavDropdown.Item href="https://strapi.io/">Strapi</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.apple.com/">Apple Official Website</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="https://about.lovia.life/blog/">Read Blog</Nav.Link>
                <Nav.Link href="https://github.com/kevinadhiguna/apple-inventory-frontend">Github</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);
