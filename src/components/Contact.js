import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send message");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send message");

    let result = await response.json();

    setFormDetails(formInitialDetails);

    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Message sent successfully.",
      });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-start">
          <Col xs={12} md={5}>
            <div className="contact-header">
              <span className="section-label">04 — CONTACT</span>

              <h2>
                Let's build
                <br />
                something useful.
              </h2>

              <p>
                Have an idea, project, collaboration, or opportunity in mind?
                I'd be happy to hear from you.
              </p>

              <div className="contact-details">
                <span>Based in Nigeria</span>
                <span>Available for selected opportunities</span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={7}>
            <form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col xs={12} sm={6}>
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) =>
                      onFormUpdate("firstName", e.target.value)
                    }
                    required
                  />
                </Col>

                <Col xs={12} sm={6}>
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) =>
                      onFormUpdate("lastName", e.target.value)
                    }
                    required
                  />
                </Col>

                <Col xs={12} sm={6}>
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) =>
                      onFormUpdate("email", e.target.value)
                    }
                    required
                  />
                </Col>

                <Col xs={12} sm={6}>
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) =>
                      onFormUpdate("phone", e.target.value)
                    }
                  />
                </Col>

                <Col xs={12}>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Tell me a little about your project..."
                    onChange={(e) =>
                      onFormUpdate("message", e.target.value)
                    }
                    required
                  />

                  <button type="submit">
                    {buttonText}
                  </button>
                </Col>

                {status.message && (
                  <Col xs={12}>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};