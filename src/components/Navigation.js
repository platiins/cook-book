import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../styles/styles.scss";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="main-nav">
      <Container className="main-nav__container">
        <Navbar.Brand className="home-icon" href="#">
          {/* <PiCookingPotBold className="home-icon"/> */}
          COOK BOOK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#">
              ABOUT US
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              CONTACTS
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
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
