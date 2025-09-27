import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="mb-4 text-center">Contact Me</h2>

        {/* Intro text */}
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center">
            <p className="lead">
              I’m always open to discussing <strong>opportunities</strong>, <strong>collaborations</strong>, or exciting projects. 
              Let’s build something <span className="text-primary fw-bold">amazing</span> together!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} lg={6} className="d-flex flex-column align-items-center">
            
            {/* Contact Form */}
            <Form className="w-100 p-4 shadow-sm rounded bg-white">
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="p-3"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="p-3"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label className="fw-bold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Write your message here"
                  className="p-3"
                />
              </Form.Group>

              <Button variant="primary" size="lg" type="submit" className="px-5">
                Send Message
              </Button>
            </Form>

            {/* Contact Info */}
            <div className="fs-5 mt-5 text-center">
              <p>
                <strong>Email :</strong> <a href="mailto:mathimuruganam@gmail.com">mathimuruganam@gmail.com</a>
              </p>
              <p>
                <strong>Phone :</strong> <a href="tel:+919042437572">+91 90424 37572</a>
              </p>
              <p>
                <strong>LinkedIn :</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/murugan-am/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/murugan-am
                </a>
              </p>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}
