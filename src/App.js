import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Audios from "./components/Audios/Audios";
import FAQ from "./components/FAQ/FAQ";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import galleryItems from "./data/galleryItems";
import faqsData from "./data/faqs";

function App() {
  return (
    <Router basename="/mi-acordeon-react">
      <Header />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/audios" element={<Audios />} />
  <Route path="/faq" element={<FAQ faqs={faqsData} />} />
  <Route path="/galeria" element={<Gallery items={galleryItems} />} />
  <Route path="/contacto" element={<Contact />} />
</Routes>

      <Footer />
    </Router>
  );
}

export default App;
