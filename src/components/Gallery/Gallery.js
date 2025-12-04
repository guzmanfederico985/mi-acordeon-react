import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Gallery.module.css";

function Gallery({ items }) {
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (src) => {
    setLightboxImg(src);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  return (
    <section
      id="galeria"
      className={`section ${styles.gallerySection}`}
      data-aos="fade-up"
    >
      <h2 data-aos="fade-up">📸 Galería</h2>

      <div className={styles.galeria}>
        {items.map((item) =>
          item.type === "img" ? (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              className={styles.imagen}     // 🔥 Hover zoom
              onClick={() => openLightbox(item.src)} // 🔥 Click → lightbox
              data-aos="zoom-in"
            />
          ) : (
            <video
              key={item.id}
              controls
              width="300"
              className={styles.video}
              data-aos="zoom-in"
            >
              <source src={item.src} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          )
        )}
      </div>

      {/*LIGHTBOX */}
      {lightboxImg && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={lightboxImg} className={styles.lightboxImg} alt="Vista ampliada" />
          <button className={styles.closeBtn}>&times;</button>
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


