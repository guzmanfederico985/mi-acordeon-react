import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card({ title, text, link, color, className }) {
  return (
    <Link
      to={link}
      className={`${styles.card} ${className || ""}`}
      style={{ borderColor: color || "#ccc" }}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};
