import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="Facebook.com"><img src="" alt="Facebook" /></Link>
        <Link to="Instagram.com"><img src="" alt="Instagram" /></Link>
        <Link to="/">Home</Link>
        <Link to="/recetasList">Recetas</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="#"><img src="" alt="Lupa" /></Link>
      </nav>
      <hr />
      <div className="logo"><Link to="/">Logo</Link></div>
    </footer>
  );
};
