import { Container, Card } from "react-bootstrap";

export default function Experience() {
  const experiences = [
    { role: "Java FullStack Development", company: "Jspiders, Bangalore", year: "May 2025 - Present", desc: "Currently pursuing training in Core Java, Advanced Java, SQL, HTML, CSS, JavaScript, React, Node.js, Express.js." },
    { role: "Java FullStack Intern", company: "Pumo Technovation Pvt Ltd, Chennai", year: "Summer-2024", desc: "Worked on web development projects using Java, SQL, HTML, CSS, JavaScript. Gained experience in responsive UI design, database integration, and end-to-end debugging." },
  ];

  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="mb-4 text-center">Experience</h2>
        {experiences.map((exp, i) => (
          <Card key={i} className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>{exp.role}</Card.Title>
              <Card.Subtitle>{exp.company}</Card.Subtitle>
              <Card.Text><strong>{exp.year}</strong> - {exp.desc}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
}
