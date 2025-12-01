import PropTypes from "prop-types";
import audiosData from "../../data/audios";
import "./Audios.css";

function Audios({ items = audiosData }) {
  return (
    <section id="audios" className="section">
      <div className="container">
        <h2>🎵 Canciones ya grabadas 😁</h2>

        <div className="audio-contenedor">
          {items.map((audio) => (
            <div key={audio.id} className="audio-item">
              <h3>{audio.title}</h3>
              <audio controls>
                <source src={audio.file} type="audio/mpeg" />
                Tu navegador no soporta audio.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Audios.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      file: PropTypes.string.isRequired,
    })
  ),
};

export default Audios;

