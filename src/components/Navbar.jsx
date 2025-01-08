import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const MyNavbar = () => {
  useEffect(() => {
    // Adding font size to the body
    document.body.style.fontSize = "18px";

    return () => {
      // Cleanup styles if necessary
      document.body.style.fontSize = "";
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container fluid>
          {/* Add your logo image here */}
          <Navbar.Brand href="#">
            <img
              src="/assets/logo.jpg" // Replace with the actual path to your logo
              alt="Logo"
              width="160" // Adjust the width of the logo
              height="50" // Adjust the height of the logo
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* Navigation links */}
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "80px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-white">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
            </Nav>

            {/* Search Form */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
