import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import necessary components

function AppNavbar() { // Renamed to avoid conflict with Navbar component from react-bootstrap
    return (
        // Use react-bootstrap components
        <Navbar className="fixed-top" bg="light" expand="lg" light>
          <Container> {/* Optional: Use Container for proper alignment/padding */}
            <Navbar.Brand href="#">Arun Felix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* No data-* attributes needed */}
            <Navbar.Collapse id="basic-navbar-nav"> {/* ID is linked by aria-controls */}
              <Nav className="mr-auto"> {/* Use Nav component */}
                <Nav.Link href="#home" active>Home</Nav.Link> {/* Use Nav.Link, 'active' prop */}
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#project">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default AppNavbar;