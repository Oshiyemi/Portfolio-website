import About from "./pages/About/About";
import Contact from "./pages/ContactUs/ContactUs";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import "./App.css";

function App() {
  return (
    <div className="appRoot">
      <Navbar />
      <main className="appMain">
        <Home />
        <Experience />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
