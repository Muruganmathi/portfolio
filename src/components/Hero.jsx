import { Container, Button, Row, Col } from "react-bootstrap";
import avatar from "../assets/MuruganImg.jpeg"; 

export default function Hero() {
  return (
    <section
      id="hero"
      className="d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6} className="text-dark text-center text-md-start">
            <h1 className="display-3 fw-bold">
              Hello, I'm <span className="text-warning">Murugan</span>
            </h1>
            <p className="lead">FullStack Web Developer</p>
            <p>
             Full-stack developer crafting seamless digital experiences with a passion for innovation.
            </p>
            <Button variant="dark" size="lg" href="#contact">
              Contact Me!
            </Button>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src={avatar}
              alt="My Avatar"
              className="rounded-circle shadow"
              style={{ maxWidth: "300px", width: "80%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
