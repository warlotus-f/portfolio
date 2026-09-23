import { Container, Row, Col } from "react-bootstrap";


import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
          <div className="footer-logo">Fortunatus</div>
        </Col>

          <Col xs={12} md={6} className="text-md-end">
            <div className="social-icon">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={navIcon1} alt="" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img src={navIcon2} alt="" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>

          <Col xs={12}>
            <div className="footer-bottom">
              <p>© 2026 Fortunatus. All rights reserved.</p>
              <p>Designed & built by Fortunatus.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};