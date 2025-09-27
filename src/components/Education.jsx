import { Container, Card } from "react-bootstrap";

export default function Education() {
  const education = [
    { degree: "B.E in Computer Science and Engineering", school: "Anna University, Ariyalur", year: "2021 - 2025" },
    { degree: "HSC (Grade 12)", school: "Sri Ayyan Vidyashram Hr Sec School, R.Kpet", year: "2020 - 2021" },
  ];

  return (
    <section id="education" className="py-5">
      <Container>
        <h2 className="mb-4 text-center">Education</h2>
        {education.map((edu, i) => (
          <Card key={i} className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>{edu.degree}</Card.Title>
              <Card.Subtitle>{edu.school}</Card.Subtitle>
              <Card.Text>{edu.year}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
}
