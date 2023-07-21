import PropTypes from "prop-types";

export const Boton = ({ label }) => {
  return <button type="button">{label}</button>;
};

export default Boton;

Boton.propTypes = {
  label: PropTypes.string,
};

Boton.defaultProps = {
  label: "Siguiente",
};
