import styles from "./Gallery.module.css";

function Gallery() {
  const items = [
    { type: "img", src: "/img/yo-acordeon-1.jpg", alt: "Yo tocando el acordeón 1" },
    { type: "img", src: "/img/yo-acordeon-2.jpg", alt: "Yo tocando el acordeón 2" },
    { type: "img", src: "/img/yo-acordeon-3.jpg", alt: "Yo tocando el acordeón 3" },
    { type: "video", src: "/video/yo-tocando.mp4", alt: "Video tocando el acordeón" },
  ];

  return (
    <section id="galeria" className={`section ${styles.gallerySection}`}>
      <h2>📸 Galería</h2>

      <div className={styles.galeria}>
        {items.map((item, i) => (
          item.type === "img" ? (
            <img key={i} src={item.src} alt={item.alt} />
          ) : (
            <video 
              key={i}
              controls
              width="300"
              style={{ borderRadius: "10px" }}
            >
              <source src={item.src} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          )
        ))}
      </div>
    </section>
  );
}

export default Gallery;

