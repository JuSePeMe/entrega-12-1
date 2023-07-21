import PropTypes from "prop-types";

const Titulo = ({ texto, nivel }) => {
  if (nivel === 1) return <h1>{texto}</h1>;
  if (nivel === 1) return <h2>{texto}</h2>;
  if (nivel === 1) return <h3>{texto}</h3>;
  if (nivel === 1) return <h4>{texto}</h4>;
  if (nivel === 1) return <h5>{texto}</h5>;
  if (nivel === 1) return <h6>{texto}</h6>;
  return <h1>{texto}</h1>;
};

Titulo.propTypes = {
  texto: PropTypes.string,
  nivel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
Titulo.defaultProps = {
  texto: "titulo",
  nivel: 1,
};

export default Titulo;
