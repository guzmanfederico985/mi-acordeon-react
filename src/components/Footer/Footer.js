import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <p>📍 Córdoba, Argentina</p>
        <p>📞 +54 9 351 806-4567</p>

        <div className="redes">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="/img/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="/img/facebook.png" alt="Facebook" />
          </a>
          <a href="https://wa.me/543511234567" target="_blank" rel="noreferrer">
            <img src="/img/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div>

      <p className="copy">© 2025 Mi Proyecto de acordeón</p>
    </footer>
  );
}

export default Footer;
