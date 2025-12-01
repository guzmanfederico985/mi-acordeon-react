import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

function Header({ title = "🎹 Mi Acordeón 🎹" }) {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">{title}</h1>

        <nav>
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/audios">Audios</Link></li>
            <li><Link to="/faq">Preguntas frecuentes</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string, // opcional
};

export default Header;
