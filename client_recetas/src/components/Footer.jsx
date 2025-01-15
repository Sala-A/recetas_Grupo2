import { Link } from "react-router-dom";

export const Footer = () => {
  const footerStyle = {
    backgroundColor: "#4E3629",
    color: "#FFFFFF",
    padding: "1rem 0",
    marginTop: "2rem",
    marginBottom: "0",
  };
  const logoStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#FFFFFF",
    userSelect: "none",
  };
  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    margin: "0 0.5rem",
  };

  return (
    <footer style={footerStyle} className="mt-auto">
      <nav className="d-flex justify-content-center align-items-center mb-3">
        <Link to="/" className="text-white mx-2" style={linkStyle}>
          Home
        </Link>
        <Link to="/recetasList" className="text-white mx-2" style={linkStyle}>
          Ver recetas
        </Link>
        <Link to="/Crear" className="text-white mx-2" style={linkStyle}>
          Crear receta
        </Link>
      </nav>
      <hr className="border-top border-white" />
      <div className="text-center">
        <Link to="/" style={logoStyle}>
          SazónApp
        </Link>
      </div>
    </footer>
  );
};
