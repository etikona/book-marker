import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    return (
        <div>
               {['lg'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">My Bookmark Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                My Bookmark Manager
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/discover">Discover</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/support">Support</Nav.Link>
                  <Nav.Link href="/plans">Plans</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </div>
    );
};

export default Header;