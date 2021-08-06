import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Main() {
  return (
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default Main;
