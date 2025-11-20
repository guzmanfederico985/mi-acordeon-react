import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    suscripcion: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert("¡Mensaje enviado con éxito!");
    setFormData({ nombre: "", email: "", mensaje: "", suscripcion: false });
  };

  return (
    <section id="contacto" className="section contact-section">
      <h2>📬 Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tuemail@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribí tu mensaje aquí..."
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
        ></textarea>

        <div className="suscripcion">
          <input
            type="checkbox"
            id="suscripcion"
            name="suscripcion"
            checked={formData.suscripcion}
            onChange={handleChange}
          />
          <label htmlFor="suscripcion">Quiero recibir novedades 🎶</label>
        </div>

        <div className="botones">
          <button type="submit">Enviar</button>
          <button
            type="reset"
            onClick={() =>
              setFormData({ nombre: "", email: "", mensaje: "", suscripcion: false })
            }
          >
            Resetear
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
