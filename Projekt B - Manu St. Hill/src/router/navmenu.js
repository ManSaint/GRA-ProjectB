import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {LinkContainer} from 'react-router-bootstrap';

export function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand>"React and adapt"</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
            <LinkContainer to="/musicbands">
                    <Nav.Link>Music bands</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/animals/Leo/Lion/20">
                    <Nav.Link>Animal: Leo</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/animals/Simba/Elephant/5">
                    <Nav.Link>Animal: Simba</Nav.Link>
                </LinkContainer>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
