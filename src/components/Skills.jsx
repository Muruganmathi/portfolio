import { Container, Row, Col, Card } from "react-bootstrap";

const skills = [
  { name: "Java", img: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "React", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { name: "Express.js", img: "https://img.icons8.com/color/48/000000/express-js.png" },
  { name: "SQL", img: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png" },
  { name: "Git", img: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5" style={{ background: "#ecebed" }}>
      <Container>
        <h2 className="mb-5 text-center fw-bold">Skills</h2>
        <Row className="justify-content-center">
          {skills.map((skill, i) => (
            <Col
              key={i}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className="d-flex flex-column align-items-center mb-4"
            >
              <Card
                className="text-center skill-card shadow-sm"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  background: "#ffffff",
                }}
              >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-2">
                  <div
                    className="skill-icon mb-2"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background: "#fff",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      style={{ width: "50%", height: "50%" }}
                    />
                  </div>
                  <span className="fw-bold">{skill.name}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .skill-card:hover .skill-icon {
          transform: scale(1.2);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
        .skill-card:hover {
          transform: translateY(-5px);
          background: #e0e0e0;
        }
      `}</style>
    </section>
  );
}
