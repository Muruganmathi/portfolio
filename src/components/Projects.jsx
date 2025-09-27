import { Container, Card, Row, Col, Badge } from "react-bootstrap";

// Import images from src/assets/images
import img1 from "../assets/images/nextgenimg.jpg";
import img2 from "../assets/images/userauth.webp";
import img3 from "../assets/images/emp.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Nextgen – AI-driven Algorithmic Trading Model",
      desc: "Built an ML-based trading system using LightGBM and CNN for real-time execution. Integrated global equity, crypto, and macroeconomic data with adaptive indicators.",
      img: img1,
      tech: ["Python", "LightGBM", "Streamlit",],
    },
    {
      title: "User Authentication System",
      desc: "Developed a secure authentication system with React (frontend) and Node.js + Express (backend), integrated with PostgreSQL for persistent user data storage.",
      img: img2,
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Employee Management Portal",
      desc: "Created a portal with gender-based filters, real-time search, and responsive Bootstrap tables for improved usability.",
      img: img3,
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="mb-4 text-center">Projects</h2>
        {projects.map((project, i) => (
          <Card key={i} className="mb-4 shadow-sm">
            <Row className="g-0 align-items-center">
              {/* Image on the left */}
              <Col md={5}>
                <Card.Img
                  src={project.img}
                  alt={project.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              </Col>

              {/* Text + Tech Stack on the right */}
              <Col md={7}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <div className="mt-2">
                    {project.tech.map((t, idx) => (
                      <Badge
                        key={idx}
                        bg="dark"
                        text="light"
                        className="me-2"
                        style={{
                          fontSize: "1rem",
                          padding: "0.5rem 0.8rem",
                          borderRadius: "0.5rem",
                        }}
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </section>
  );
}
