import Header from "./components/Header"
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {


  return (
    <>
      <Header ></Header>
      <Intro id="intro"></Intro>
      <About id="about"></About>
      <Projects id="projects"></Projects>
      <Skills id="skills"></Skills>
      <Contact id="contact"></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
