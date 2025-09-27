import { Container } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <p className="lead text-center mx-auto" style={{ maxWidth: "800px" }}>
          I am a passionate Full-Stack Developer with a strong foundation in Computer Science and Engineering. My journey is fueled by a continuous drive to learn and explore new avenues in technology, allowing me to build comprehensive, high-performance web applications.
        </p>
        <p className="lead text-center mx-auto" style={{ maxWidth: "800px" }}>
          I have hands-on experience with a variety of technologies, including Java, SQL, JavaScript, React, and Node.js. I leverage these tools across the entire stack—from database design to crafting intuitive front-end interfaces—to deliver scalable and maintainable code.
        </p>
      </Container>
    </section>
  );
}