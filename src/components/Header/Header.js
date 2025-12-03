import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>🎹 Mi Acordeón</Link>
      </div>

      {/* Botón hamburguesa */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navegación */}
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Inicio</Link>
        <Link to="/audios" onClick={closeMenu}>Audios</Link>
        <Link to="/galeria" onClick={closeMenu}>Galería</Link>
        <Link to="/faq" onClick={closeMenu}>Preguntas</Link>
        <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;

