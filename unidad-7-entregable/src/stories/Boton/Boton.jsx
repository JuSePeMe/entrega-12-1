import PropTypes from "prop-types";
import "./boton.scss";

export const Boton = ({ label, primary, size }) => {
  const tipo = primary ? "btn-primary" : "btn-secondary";
  return (
    <button type="button" className={`btn ${tipo} btn-${size}`}>
      {label}
    </button>
  );
};

export default Boton;

Boton.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Boton.defaultProps = {
  label: "Siguiente",
  primary: true,
  size: "medium",
};
