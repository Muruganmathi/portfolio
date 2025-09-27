import { Container } from "react-bootstrap";
import NavbarComp from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavbarComp />
      <Container fluid className="px-0">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </Container>
      <footer className="text-center py-3 bg-dark text-light">
        © {new Date().getFullYear()} Murugan A M. All rights reserved.
      </footer>
    </>
  );
}

export default App;
