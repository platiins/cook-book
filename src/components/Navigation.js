import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../styles/styles.scss";

function Navigation({ setPages, username}) {
  return (
    <Navbar collapseOnSelect expand="lg" className="main-nav">
      <Container className="main-nav__container">
        <Navbar.Brand
          onClick={() => setPages("about-us")}
          className="home-icon"
          href="#"
        >
          {username}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPages("about-us")} className="nav-link">
              ABOUT US
            </Nav.Link>
            <Nav.Link
              onClick={() => setPages("contacts")}
              className="nav-link"
              href="#"
            >
              CONTACTS
            </Nav.Link>
            <Nav.Link
              onClick={() => setPages("recipes")}
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
