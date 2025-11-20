function Audios() {
  return (
    <section id="audios" className="section">
      <div className="container">
        <h2>🎵 Canciones ya grabadas 😁</h2>

        <div className="audio-contenedor">
          <div className="audio-item">
            <h3>Quitapenas</h3>
            <audio controls>
              <source src="/audio/quitapenas.mp3" type="audio/mpeg" />
            </audio>
          </div>

          <div className="audio-item">
            <h3>Katyusha</h3>
            <audio controls>
              <source src="/audio/katsuya.mp3" type="audio/mpeg" />
            </audio>
          </div>

          <div className="audio-item">
            <h3>Serva la Boga</h3>
            <audio controls>
              <source src="/audio/serva-la-boga.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Audios;

