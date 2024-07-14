import styles from "./App.module.css";
import { About } from "./components/Sobre/Sobre";
import { Contact } from "./components/Contato/Contato";
import { Experience } from "./components/Habilidades/Habilidades";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projetos/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
