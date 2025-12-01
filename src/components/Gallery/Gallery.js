import PropTypes from "prop-types";
import styles from "./Gallery.module.css";

function Gallery({ items }) {
  return (
    <section id="galeria" className={`section ${styles.gallerySection}`}>
      <h2>📸 Galería</h2>

      <div className={styles.galeria}>
        {items.map((item) =>
          item.type === "img" ? (
            <img key={item.id} src={item.src} alt={item.alt || "Imagen"} />
          ) : (
            <video
              key={item.id}
              controls
              width="300"
              style={{ borderRadius: "10px" }}
            >
              <source src={item.src} type="video/mp4" />
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
      type: PropTypes.oneOf(["img", "video"]).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string, // opcional
    })
  ).isRequired,
};

export default Gallery;
