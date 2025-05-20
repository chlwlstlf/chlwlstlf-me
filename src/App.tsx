import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Stacks from "./pages/Stacks/Stacks";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />

      <About />

      <Stacks />

      <Projects />

      <Experience />

      <Contact />
    </>
  );
}

export default App;
