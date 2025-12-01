import { useState } from "react";
import PropTypes from "prop-types";
import "./Contact.css";
import contactFormData from "../../data/contactForm";

function Contact({ onSubmit }) {
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
      alert(contactFormData.errorMessage);
      return;
    }

    alert(contactFormData.successMessage);

    if (onSubmit) onSubmit(formData);

    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
      suscripcion: false,
    });
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
          placeholder={contactFormData.nombrePlaceholder}
          value={formData.nombre}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={contactFormData.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder={contactFormData.mensajePlaceholder}
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
          <label htmlFor="suscripcion">{contactFormData.suscripcionLabel}</label>
        </div>

        <div className="botones">
          <button type="submit">Enviar</button>
          <button
            type="reset"
            onClick={() =>
              setFormData({
                nombre: "",
                email: "",
                mensaje: "",
                suscripcion: false,
              })
            }
          >
            Resetear
          </button>
        </div>
      </form>
    </section>
  );
}

Contact.propTypes = {
  onSubmit: PropTypes.func,
};

export default Contact;
