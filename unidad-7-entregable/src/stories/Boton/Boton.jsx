import PropTypes from "prop-types";
import "./boton.scss";

export const Boton = ({ label }) => {
  return (
    <button type="button" className="btn">
      {label}
    </button>
  );
};

export default Boton;

Boton.propTypes = {
  label: PropTypes.string,
};

Boton.defaultProps = {
  label: "Siguiente",
};
