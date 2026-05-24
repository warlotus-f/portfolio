import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>

        <Navbar.Brand as={HashLink} to="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="#skills">Skills</Nav.Link>
            <Nav.Link as={HashLink} to="#projects">Projects</Nav.Link>
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

            <a href="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </a>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};