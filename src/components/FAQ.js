import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuándo empecé a tocar y por qué?",
      answer:
        "Comencé en Noviembre del 2024 (hace un año ya). Siempre me gustó el acordeón como instrumento y la infinidad de estilos musicales que este puede llegar a tocar. Y mi abuelo tenia uno, que se dejo de usar el dia que el fallecio. Despues de mucha busqueda logre encontrar un profesor que me enseñara y eso me motivó mucho más."
    },
    {
      question: "¿Qué acordeón uso y qué diferencia hay con otros?",
      answer:
        "Uso un Heimond de 80 bajos y 37 teclas. La diferencia principal entre acordeones está en la cantidad de bajos y extensión del teclado: más botones y teclas es igual a más melodías posibles que pueden sonar."
    },
    {
      question: "¿Qué géneros me gustan más?",
      answer:
        "Principalmente el cuarteto. También disfruto mucho el pasodobles, polcas, tarantelas, algunas cumbias y las chacareras o los chamames."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="accordion-section section">
      <h2>🙋 Preguntas Frecuentes</h2>

      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            className={`accordion ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>

          <div className={`panel ${activeIndex === index ? "open" : ""}`}>

            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FAQ;
