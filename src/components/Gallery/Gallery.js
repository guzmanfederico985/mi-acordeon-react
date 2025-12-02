import PropTypes from "prop-types";
import styles from "./Gallery.module.css";

function Gallery({ items }) {
  return (
    <section id="galeria" className={`section ${styles.gallerySection}`}>
      <h2>📸 Galería</h2>

      <div className={styles.galeria}>
        {items.map((item) =>
          item.type === "img" ? (
            <img
              key={item.id}
              src={process.env.PUBLIC_URL + item.src}
              alt={item.alt}
            />
          ) : (
            <video
              key={item.id}
              controls
              width="300"
              style={{ borderRadius: "10px" }}
            >
              <source
                src={process.env.PUBLIC_URL + item.src}
                type="video/mp4"
              />
              Tu navegador no soporta el video.
            </video>
          )
        )}
      </div>
    </section>
  );
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
