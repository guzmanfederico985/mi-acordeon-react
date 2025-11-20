import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Audios from "./components/Audios";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/audios" element={<Audios />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/galeria" element={<Gallery />} />
  <Route path="/contacto" element={<Contact />} />
</Routes>

      <Footer />
    </Router>
  );
}

export default App;
