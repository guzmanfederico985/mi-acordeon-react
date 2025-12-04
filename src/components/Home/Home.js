import PropTypes from "prop-types";
import "./Home.css";
import Card from "../Card/Card";
import homeSections from "../../data/homeSections";

function Home() {
  return (
    <section className="home-section" data-aos="fade-up">
      <h2 className="home-title">🎹 Bienvenido a Mi Mundo del Acordeón 🎶</h2>
      <p className="home-subtitle">Elegí una sección para explorar:</p>

      <div className="card-grid">
        {homeSections.map((item, index) => (
          <div key={index} data-aos="zoom-in">
            <Card
              title={item.title}
              text={item.text}
              link={item.link}
              color={item.color}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

Home.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
