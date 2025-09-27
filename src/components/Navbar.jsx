import { Navbar, Nav, Container } from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function NavbarComp() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#hero">Mugii😉</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            {/* Social Icons */}
            <Nav.Link
              href="https://www.linkedin.com/in/murugan-am/"
              target="_blank"
              rel="noreferrer"
              className="ms-2"
            >
              <FaLinkedin style={{ color: "white", fontSize: "20px" }} />
            </Nav.Link>
            <Nav.Link
              href="mailto:mathimuruganam@gmail.com"
              className="ms-2"
            >
              <FaEnvelope style={{ color: "white", fontSize: "20px" }} />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Muruganmathi"
              target="_blank"
              rel="noreferrer"
              className="ms-2"
            >
              <FaGithub style={{ color: "white", fontSize: "20px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
