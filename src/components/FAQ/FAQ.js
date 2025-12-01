import { useState } from "react";
import PropTypes from "prop-types";
import "./FAQ.css";

function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

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

FAQ.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQ;
