import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../styles/styles.scss";
import NavRule from "./NavRule";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="main-nav">
      <Container className="main-nav__container">
        <Navbar.Brand className="home-icon" href="#">
          COOK BOOK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              // onClick={() => setPage("about-us")}
              className="nav-link"
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              // onClick={() => setPage("contacts")}
              className="nav-link"
              href="#"
            >
              CONTACTS
            </Nav.Link>
            <Nav.Link
              // onClick={() => setPage("recipes")}
              className="nav-link"
              href="#"
            >
              RECIPES
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-link" href="#">
              SM
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
