import "./App.css";
import styled from "styled-components";
import { Header } from "./layouts/Header";
import { Intro } from "./layouts/Intro";
import { About } from "./layouts/About";
import { Skills } from "./layouts/skills/Skills";
import { Works } from "./layouts/works/Works";
import { Clients } from "./layouts/clients/Clients";
import { Contact } from "./layouts/Contact";
import { Footer } from "./layouts/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Works />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
