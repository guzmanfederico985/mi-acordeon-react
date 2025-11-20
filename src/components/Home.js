import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const sections = [
    {
      title: "🎵 Audios",
      text: "Escuchá mis canciones y grabaciones favoritas.",
      link: "/audios",
      color: "#c49b3e",
    },
    {
      title: "📸 Galería",
      text: "Mirá las fotos de mis presentaciones y ensayos.",
      link: "/galeria",
      color: "#ffcc70",
    },
    {
      title: "🙋 Preguntas Frecuentes",
      text: "Conocé más sobre mi historia y el acordeón.",
      link: "/faq",
      color: "#a8d8ea",
    },
    {
      title: "📩 Contacto",
      text: "¿Querés escribirme? Encontrá mis redes y mensaje directo.",
      link: "/contacto",
      color: "#b8e994",
    },
  ];

  return (
    <section className="home-section">
      <h2 className="home-title">🎹 Bienvenido a Mi Mundo del Acordeón 🎶</h2>
      <p className="home-subtitle">Elegí una sección para explorar:</p>

      <div className="card-grid">
        {sections.map((item, index) => (
          <Link to={item.link} key={index} className="card" style={{ borderColor: item.color }}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
