import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";

function Gallery({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (src) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className={`section ${styles.gallerySection}`}>
      <h2>📸 Galería</h2>

      <div className={styles.galeria}>
        {items.map((item) =>
          item.type === "img" ? (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              className={styles.imagen}
              onClick={() => openLightbox(item.src)}
              style={{ cursor: "pointer" }}
            />
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

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={selectedImage} alt="vista ampliada" className={styles.lightboxImg} />
          <button className={styles.closeBtn} onClick={closeLightbox}>
            ✖
          </button>
        </div>
      )}
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

