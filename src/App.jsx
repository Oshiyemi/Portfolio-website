import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact Us/ContactUs";
import "./App.css";

function App() {
  return (
    <div className="appRoot">
      <Navbar />
      <main className="appMain">
        <Home />
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
