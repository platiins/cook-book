import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ThemeContext } from "../context/theme";
import { useContext } from "react";

import { FaExchangeAlt } from "react-icons/fa";
import "../styles/styles.scss";

function Navigation({ setPages, username }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      collapseOnSelects
      expand="lg"
      className="main-nav"
      style={{
        backgroundColor: theme === "light" ? "#47482f" : " #b4b093",
      }}
    >
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
            <Nav.Link
              onClick={() => setPages("about-us")}
              className="nav-link"
              style={{
                color: theme === "light" ? " #b4b093" : "#47482f",
              }}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              onClick={() => setPages("recipes")}
              href="#"
              style={{
                color: theme === "light" ? " #b4b093" : "#47482f",
              }}
            >
              RECIPES
            </Nav.Link>
            <Nav.Link
              onClick={() => setPages("contacts")}
              className="nav-link"
              href="#"
              style={{
                color: theme === "light" ? " #b4b093" : "#47482f",
              }}
            >
              CONTACTS
            </Nav.Link>
            <Nav.Link
              onClick={() => setPages("register")}
              href="#"
              style={{
                color: theme === "light" ? " #b4b093" : "#47482f",
              }}
            >
              REGISTER
            </Nav.Link>
          </Nav>
          <button
            className="change-theme-btn"
            onClick={toggleTheme}
            style={{
              color: theme === "light" ? " #b4b093" : "#47482f",
            }}
          >
            <FaExchangeAlt />
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
