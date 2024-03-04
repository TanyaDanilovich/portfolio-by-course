import { Header } from "./layouts/header/Header";
import { Intro } from "./layouts/Intro";
import { About } from "./layouts/About";
import { Skills } from "./layouts/skills/Skills";
import { Works } from "./layouts/works/Works";
import { Clients } from "./layouts/clients/Clients";
import { Contact } from "./layouts/Contact";
import {Footer} from './layouts/footer/Footer';

function App() {
  return (
    <div>
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
