import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "react-bootstrap-icons";
import { useState, useEffect, useCallback } from "react";
import fortuneImage from "../assets/img/fortune.jpeg";

const toRotate = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer"
];

const period = 2000;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(120);

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(120);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} xl={8}>
            <div className="banner-content">

              <span className="banner-label">WEB DEVELOPER</span>

              <h1>
                Hi, I'm <span className="accent-text">Abiodun-Onajobi Fortunatus.</span>
              </h1>

              <h2>
                <span>{text}</span>
              </h2>

              <p>
                I turn ideas into useful digital products, adapting to the tools and technologies each problem demands.
              </p>

              <div className="banner-actions">
                <a href="#projects" className="primary-btn">
                  View my work
                  <ArrowUpRight size={18} />
                </a>

                <a href="#connect" className="secondary-btn">
                  Let's talk
                </a>
              </div>

            </div>
          </Col>

          <Col xs={12} md={4} xl={4}>
          <div className="banner-photo">
            <img src={fortuneImage} alt="Fortune" />
          </div>
        </Col>
        </Row>
      </Container>
    </section>
  );
};