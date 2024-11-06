import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <div className="logo"><Link to="/">Logo</Link></div>
      <Link to="/">Home</Link>
      <Link to="/recetasList">Recetas</Link>
      <Link to="/LogIn">Log In</Link>
    </nav>
  );
};
