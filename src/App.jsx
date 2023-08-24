import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Test from "./components/Cube";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;

  &::-webkit-scrollbar {
    display: none;
  }
  background: url("./img/bg.png");

  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
