import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={HashLink} to="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={HashLink}
              to="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              to="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              to="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="Twitter" />
              </a>
            </div>

            <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};